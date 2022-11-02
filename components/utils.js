import Cookies from 'js-cookie'
import create from 'zustand'


export const useMainStore = create((set) => ({
	STORE: {},
	updateStore: (key, obj) => set((state) => ({ [key]: {...state[key], ...obj }})),
}))


export const { STORE, updateStore } = useMainStore.getState()


const mainReducer = (state=null, action=null) => {
    switch(action.type) {
        case 'wrangle data':
            return wrangleData({obj: action.data});

        case 'set-cookie':
			const {name, cookie, expires} = action
			// mainReducer('state', { type: 'set-cookie', name: 'questionnaire', cookie: clean.cartUid, expires: 1 })
            Cookies.set(name, cookie, { expires })
			break;

        case 'get-cookie':
			// mainReducer('state', { type: 'get-cookie', name: 'questionnaire'})
            return Cookies.get(`${action.name}`);

        case 'remove-cookie':
			// mainReducer('state', { type: 'remove-cookie', name: 'questionnaire'})
            Cookies.remove(`${action.name}`)
			break;
    
        default:
            return state;
    }
}



export const wrangleData = (props)=>{
	const {obj, infoIsFilled, setVal} = props;
	const cleanData = {}
	try {
		Object.entries(obj).forEach(([key, value]) => {
			if(typeof(value) === 'string' && value.includes('{')){
				cleanData[key]=JSON.parse(value)
			}else{
				cleanData[key]=obj[key]
			}
		});
	} catch (error) {
		console.log(error.message);
		return error
	}

	const flat = flattenFunc(cleanData)
	
	if(typeof(infoIsFilled) === 'function') infoIsFilled(true)
	if(typeof(setVal) === 'function') setVal(flat)
	return flat
}

const flattenFunc = (obj) => {
	
	const flattened = {}
  
	Object.entries(obj).forEach(([key, value]) => {
		if (value instanceof Object ) {
			Object.assign(flattened, flattenFunc(value))
		} else {
			flattened[key] = value
		}
	})
	// const data = toCamel(flattened)
	
	return flattened
}
// This replaces underscore or spaces with camelCase

export const toCamel = (obj) => { 
	const _toCamel = s => s.replace(/(_\w|\s\w)/g, k => k[1].toUpperCase())
	let data = Object.entries(obj).reduce((acc, [key, value]) =>{
		return { ...acc, [_toCamel(key)]: value }
	}, {})

	return data
}

  
  export default mainReducer;