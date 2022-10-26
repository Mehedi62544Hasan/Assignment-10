import React, { useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)
 


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

const loginGoogle = (provider) =>{
     return signInWithPopup(auth, provider);
}




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
            }
         });
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = { user, createAccount, loginGoogle };
    return (
        <AuthContext.Provider value={authInfo}>
            {children};
        </AuthContext.Provider>
    );
};

export default AuthProvider;