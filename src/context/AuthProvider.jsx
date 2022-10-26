import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
 


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    console.log(user)

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

const loginGoogle = (provider) =>{
     return signInWithPopup(auth, provider);
}


const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password);
}

const updateUserProfile = profile => {
    return updateProfile(auth.currentUser, profile)
}

const logOut = () => {
     return signOut(auth);
}




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
         });
        return () => {
            unsubscribe();
        }
    }, [user])


    const authInfo = {
         user, 
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