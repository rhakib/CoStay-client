import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';

import axios from 'axios';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (img, name) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, (currentUser => {
    //         const userEmail = currentUser?.email || user?.email
    //         const loggedUser = { email: userEmail }
    //         setUser(currentUser)
    //         setLoading(false)

    //         //if user exists then issue a token
    //         if (currentUser) {
    //             axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
    //                 .then(res => {
    //                     console.log('token response', res.data);
    //                 })
    //         }
    //         else {
    //             axios.post('http://localhost:5000/logout', loggedUser, {
    //                 withCredentials: true
    //             })
    //                 .then(res => {
    //                     console.log(res.data);
    //                 })

    //         }

    //     }));
    //     return () => {
    //         unSubscribe()
    //     }
    // }, [])
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoading(false)
        }));
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        updateUserProfile,
        googleSignIn,
        logOut,
        user,
        loading
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;