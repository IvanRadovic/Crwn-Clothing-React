import { signInWithGooglePopup } from "../../utils/fiebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
    }
  return(
    <>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </>
  )
}

export default SignIn;