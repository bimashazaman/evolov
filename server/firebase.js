import React, { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged, 
    getAuth, 
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    updatePassword,
    confirmPasswordReset,
    verifyPasswordResetCode,
    applyActionCode,
    updateProfile,
    // verifyBeforeUpdateEmail,
} from "firebase/auth";
import {getStorage} from 'firebase/storage'
import Cookies from 'js-cookie'

import { client } from './apolloClient'

import { useApollo } from './apolloClient'

import { ApolloProvider } from "@apollo/client";



export const confirmPath = ""
export const resetPath = ""
// TODO:
// Customizing the redirect domain for Google sign-in https://firebase.google.com/docs/auth/web/google-signin#expandable-4
// Firestore for pictures


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaOTDWhhGgZUMeZyaZiqeQeItfWZ4tLc8",
  authDomain: "evolov-cd6a6.firebaseapp.com",
  projectId: "evolov-cd6a6",
  storageBucket: "evolov-cd6a6.appspot.com",
  messagingSenderId: "433444549215",
  appId: "1:433444549215:web:86174c438b76ae5136e1ea",
  measurementId: "G-DDRRM3D3HN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
export const storage = getStorage(app);

let auth;

try {
    auth = getAuth(app)
} catch (error) {
    console.log(error);
}
export const authContext = createContext();

export const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}


export const updateInfo = (username, photo=null)=>{
    updateProfile(auth.currentUser, {
        displayName: username, photoURL: photo
    }).then(() => {
        return
    }).catch((error) => {
        return error
    });
}

export const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser, {url: `${window.location.origin}/${confirmPath}/`})
}

export const completeVerification = (oobCode) =>{
    return applyActionCode(auth, oobCode)
}

export const resetPasswordEmail = (email) =>{
    return sendPasswordResetEmail(auth, email, {url: `${window.location.origin}/${resetPath}/`})
}

export const verifyCode = (oobCode) =>{
    return verifyPasswordResetCode(auth, oobCode)
}

export const confirmReset = (oobCode, newPassword) =>{
    return confirmPasswordReset(auth, oobCode, newPassword)
}

export const changePassword = (newPassword) =>{
    return updatePassword(auth.currentUser, newPassword)
}

export const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


export const logout = ()=>{
    Cookies.remove('email')
    Cookies.remove('uid')
    Cookies.remove('auth_token')
    return signOut(auth)
}

export const AuthProvider = ({children}) => {



    const client = useApollo()

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [location, setLocation] = useState(null)

    useEffect(() => {
        fetch(`https://geolocation-db.com/json/${process.env.NEXT_PUBLIC_IP_ADDRESS}`)
        .then(res => res.json())
        .then(data => {
            setLocation(data)
        }).catch((error) => {
            console.log(error)
        });
        auth && onAuthStateChanged(auth, (user) => {
            if (user) {
                // https://firebase.google.com/docs/reference/js/firebase.User
                setCurrentUser(user);
                setLoading(false); 
                Cookies.set('email', user.email)
                Cookies.set('uid', user.uid)
                Cookies.set('emailVerified', user.emailVerified)
            } else {
                setCurrentUser(null);
                setLoading(false); 
                logout();
            }
        });
          
    }, [])


    
    const contextValues = { 
        currentUser,
        location,
        logout,
        signUp,
        login
    };

    return (
        <ApolloProvider client={client}>
            <authContext.Provider value={contextValues}>
                {!loading && children}
            </authContext.Provider>
        </ApolloProvider>
    )
}


