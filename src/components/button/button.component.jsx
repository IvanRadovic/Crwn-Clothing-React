import { BaseButton, GoogleSignInButton, InvertedButton } from "./button.style";


export const BUTTON_TYPE_CLASSES = {
    base:'base',
    google:'google-sign-in',
    inverted:'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]:InvertedButton,
    } [buttonType]
);

const Button = ({children, buttonType, ...otherProprs}) => {
    const CustomButton = getButton(buttonType);
 return(
    <CustomButton {...otherProprs}> {children} </CustomButton>
 ) 
}

export default Button;