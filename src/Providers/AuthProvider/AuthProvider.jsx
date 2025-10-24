import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const AuthProvider = ({children}) => {
    //states
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    // creat user
    const creatUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (profileInfo) =>{
        return updateProfile(auth.currentUser,profileInfo)
    }
    const loginWithGoogle  =()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const logOut =() =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
        creatUser,
        signIn,
        updateUserProfile,
        loginWithGoogle,
        logOut

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;