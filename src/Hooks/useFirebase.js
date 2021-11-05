import  { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,  onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

   // declare getAuth
   const auth = getAuth();
     
    // 3rd party login useState declare
    const [user, setUser] = useState({});

    // isLoading useState declare
    const [isLoading, setIsLoading] = useState(true);

   
    
        //------ google provider-------
         const googleProvider = new GoogleAuthProvider();




      // ---------------handle google sign in process----------------
     const signInUsingGoogle = () => {

       setIsLoading(true);
        return  signInWithPopup(auth, googleProvider)
        
      } 


    
//------------ handle sign out part-------------
const handleSignOut = () => {

  setIsLoading(true);
    signOut(auth)
    .then(() => {
        setUser({});
    })
    .finally(() => setIsLoading(false));
        
  }
  
  
  
  useEffect( () => {
  
      onAuthStateChanged(auth, (user) => {
          if (user) {           
               setUser(user);
          }
           else {
            setUser({})
          }
          setIsLoading(false)
        });
     } ,[])
  

   
     return {
        user,   
        isLoading,
        signInUsingGoogle,
        handleSignOut
    };
};

export default useFirebase;