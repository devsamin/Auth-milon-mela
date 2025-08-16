import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase_init';

export const AuthContext = createContext(null);
const Authprovider = ({children}) => {

    const [user, setuser] = useState(null)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signout = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                console.log("Currently Logged in user..")
                // console.log(currentUser)
                setuser(currentUser)

            }
            else{
                console.log("No logged use are avilable now..")
                setuser(null)
            }
        })
        return ()=>{
            unsubcribe()
        }
    },[])

    const authInfo = {
        name : 'Hablu Khablu',
        user,
        createUser,
        signUser,
        signout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;