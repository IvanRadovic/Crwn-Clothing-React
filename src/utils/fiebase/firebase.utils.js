import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider, 
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD3YicZwkP4yyDQ33j4OLZUjJqXclz2IfQ",
    authDomain: "e-commerce-db-fcbbb.firebaseapp.com",
    projectId: "e-commerce-db-fcbbb",
    storageBucket: "e-commerce-db-fcbbb.appspot.com",
    messagingSenderId: "375330314336",
    appId: "1:375330314336:web:2927932b2e23713ba68b05"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  /* --- sign ing with GOOGLE Popup --- */
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'});

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


  /* -- Initialize data-base -- */
  export const db = getFirestore();

  /* --- creating user document in users collection --- */
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); // took data from user and we make path to the data-base
    console.log(userSnapshot);

    if(!userSnapshot.exists()) { 
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { // setDoc with display name, email, and date
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;

  }
