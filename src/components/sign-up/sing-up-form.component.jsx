import { createAtuhUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/fiebase/firebase.utils";
import { useState } from "react";


const defaultFormFields = { //we make default fields for all inputs
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [ formFields, setFormFields] = useState(defaultFormFields); // set formFields to take defaultFormFields
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const handlerSubmit = async (event) => {
        event.preventDefault(); 
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const { user } = await createAtuhUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
        } catch (error) {
            console.log("user creation encoutered an error", error);
        }
    }

    const handleChange = (event) => { //we want to make one hanlder for all inputs
      const { name, value } = event.target; // by name, we will know what value is for which input
        setFormFields({...formFields, [name]:value })
    }

  return(
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handlerSubmit}>
            <label>Display Name</label>
            <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
            <label>Email</label>
            <input type="email" required onChange={handleChange} name="email" value={email} />
            <label>Password</label>
            <input type="password" required onChange={handleChange} name="password" value={password} />
            <label>Confirm Password</label>
            <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
            <button type="submit"> Sign Up </button>
        </form>
    </div>
  )
}

export default SignUpForm;