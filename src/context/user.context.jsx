import { createContext, useState, useEffect } from "react";
import { onAuthStateChagneListener, signOutUser, createUserDocumentFromAuth } from "../utils/fiebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null, // empty object gives us true - null means no context 
    setCurrentUser: () => null
});

//actual component 
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null); 
    const value = {currentUser, setCurrentUser}

    useEffect( () => {
     const unsubscribe = onAuthStateChagneListener((user) => {
      if(user){
        createUserDocumentFromAuth(user);
      }
        setCurrentUser(user);
      })
      return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}