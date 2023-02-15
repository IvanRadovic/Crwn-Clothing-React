import "./button.style.scss";


const BUTTON_TYPE_CLASSES = {
    google:'google-sign-in',
    inverted:'inverted'
}

const Button = ({children, buttonType, ...otherProprs}) => {
 return(
    <button 
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} 
        {...otherProprs}
    >
        {children}
    </button>
 ) 
}

export default Button;