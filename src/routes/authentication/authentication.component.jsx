import SignUpForm from "../../components/sign-up/sing-up-form.component";
import SignInForm from "../../components/sign-in/sing-in-form.component";

import { AuthenticationContainer } from "./authentication.style";

const Authentication = () => {

  return(
    <AuthenticationContainer>
        <SignInForm />
        <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication;