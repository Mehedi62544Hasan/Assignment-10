import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
 


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

 
    const createAccount = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

const loginGoogle = (provider) =>{
    setLoader(true);
     return signInWithPopup(auth, provider);
}


const signIn = (email, password) => {
    setLoader(true);
     return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
}

const logOut = () => {
    setLoader(true);
     return signOut(auth);
}




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
         });
        return () => {
            unsubscribe();
        }
    }, [user])


    const authInfo = {
         user, 
         loader,
         setLoader,
         createAccount, 
         loginGoogle, 
         signIn,
         updateUserProfile, 
         logOut 
        };
    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;