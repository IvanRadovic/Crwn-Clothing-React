import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/fiebase/firebase.utils";

import SignUpForm from "../../components/sign-up/sing-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    }

  return(
    <>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        <SignUpForm />
    </>
  )
}

export default SignIn;