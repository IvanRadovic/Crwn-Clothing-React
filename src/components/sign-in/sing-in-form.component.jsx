import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/fiebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";

import "./sign-in.style.scss";

import { useState, useContext } from "react";


const defaultFormFields = { //we make default fields for all inputs
    email: '',
    password: '',
}

const SignInForm = () => {

    const [ formFields, setFormFields] = useState(defaultFormFields); // set formFields to take defaultFormFields
    const { email, password } = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    }

    const SignInWithGoogle = async () => {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    };

    const handlerSubmit = async (event) => {
        event.preventDefault(); 

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response); control uid -- access token
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                    default:
                        console.log(error);
            }
        }
    }

    const handleChange = (event) => { //we want to make one hanlder for all inputs
      const { name, value } = event.target; // by name, we will know what value is for which input
        setFormFields({...formFields, [name]:value })
    }

  return(
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handlerSubmit}>
            <FormInput 
                label={"Email"} 
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email} 
            />
            <FormInput 
                label={"Password:"} 
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password} 
            />
            <div className="buttons-container">
                <Button type="submit"> Sign In </Button>
                <Button type='button' buttonType={'google'} onClick={SignInWithGoogle}>Google sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInForm;