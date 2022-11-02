import create from 'zustand'
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Cookies from 'js-cookie'
import { wrangleData } from '../components/utils';
import { useMemo } from 'react';
import { setContext } from '@apollo/client/link/context';



// Cookies.set('name', 'value', { expires: 7 })

export const serverData = create((set) => ({
	serverError: {},
	gqlData: {},
	updateError: (obj) => set((state) => ({ serverError: {...state['serverError'], ...obj }})),
	updateGqlData: (obj) => set((state) => ({ gqlData: {...state['gqlData'], ...obj }})),
}))

export const { serverError, updateError, updateGqlData } = serverData.getState()



export const cleanFilterData = (data, filter, currency, setState)=>{
  const arr = []
  const { edges } = data[filter]
  edges.forEach(obj =>{
    let id = obj['node']['id'] ? obj['node']['id'] : null
    let details = obj['node']['details'] ? JSON.parse(obj['node']['details']) : null
    let facilities = obj['node']['facilities'] ? JSON.parse(obj['node']['facilities']) : null
    let nearby = obj['node']['nearby'] ? JSON.parse(obj['node']['nearby']) : null
    arr.push(wrangleData({obj: {
      id,
      details,
      facilities,
      nearby,
      currency,
    }}));
  })
  setState(arr)
  updateGqlData(arr)
}



const errorLink = onError(({ graphQLErrors, networkError }) => {
  updateError({
    graphQLError: graphQLErrors && graphQLErrors[0]?.message,
    networkError: networkError && networkError?.message,
  })
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const httpLink = new HttpLink({
  uri: "http://127.0.0.1:8000/", // Server URL (must be absolute)
  credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${Cookies.get('auth_token')}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  credentials: 'include',
  
  cache: new InMemoryCache({
    typePolicies: {
      CompanyType: {
        keyFields: [["user"]],
      },
      Employees: {
        keyFields: ["slug"],
      },
    }
  })
});

const createApolloClient = ()=>{
  
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
    cache: new InMemoryCache({
      typePolicies: {
        CompanyType: {
          keyFields: [["user"]],
        },
        Employees: {
          keyFields: ["slug"],
        },
      }
    })
  });
}

export const useApollo = ()=> useMemo(() => createApolloClient(), [])

