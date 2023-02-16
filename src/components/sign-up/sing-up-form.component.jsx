import { createAtuhUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/fiebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { UserContext } from "../../context/user.context";
import "./sign-up.style.scss";

import { useState, useContext } from "react";


const defaultFormFields = { //we make default fields for all inputs
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [ formFields, setFormFields] = useState(defaultFormFields); // set formFields to take defaultFormFields
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext); 

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      }

    const handlerSubmit = async (event) => {
        event.preventDefault(); 
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAtuhUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setCurrentUser(user);
            resetFormFields();
        } catch (error) {
            console.log("user creation encoutered an error", error);
            switch(error.code){
                case 'auth/auth/weak-password':
                    alert('weak paassword - please to be at least 6 characters !');
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
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handlerSubmit}>
            <FormInput 
                label={"Display name"} 
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName" 
                value={displayName} 
            />
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
            <FormInput 
                label={"Confirm password"} 
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword} 
            />
            <Button type="submit"> Sign Up </Button>
        </form>
    </div>
  )
}

export default SignUpForm;