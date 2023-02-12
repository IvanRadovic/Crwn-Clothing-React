import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider, 
} from "firebase/auth";

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

  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'});

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
