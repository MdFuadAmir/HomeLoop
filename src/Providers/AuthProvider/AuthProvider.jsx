import { useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  //states
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (profileInfo) => {
    return updateProfile(auth.currentUser, profileInfo);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const savedUser = async (user) => {
    const currentUser = {
      email: user?.email,
      role: "guest",
      status: "Verified",
    };
    const { data } = await axios.put(`http://localhost:3000/users`, currentUser);
    return data;
  };
  // const getToken = async(email)=>{
  //   const {data} = await axios.post(`http://localhost:3000`,{email},{withCredentials:true})
  //   return data;
  // }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {
      setUser(currentUser);
      if  (currentUser) {
        //  await getToken(currentUser.email);
         await savedUser(currentUser);
      }
      console.log("user in theauth state change", currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    creatUser,
    signIn,
    updateUserProfile,
    loginWithGoogle,
    logOut,
    resetPassword,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
