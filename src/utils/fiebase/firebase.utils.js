import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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


  /* --- sign-in with GOOGLE Popup --- */
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'});

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  /* -- Initialize data-base -- */
  export const db = getFirestore();

  /* --- creating user document in users collection --- */
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if(!userAuth) return;  //protect our code
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
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;

  }

  /* --- create Auth User with email and password --- */
  export const createAtuhUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; //protect our code - if firebase changes system, for example change the way of createing data-base
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  /* --- sign in User with email and password --- */
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }
