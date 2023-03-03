import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

/* ---- Styled Components ---- */
import { CheckOutItemContainer } from "./checkout-item.style";

const CheckoutItem = ({ cartItem }) => {
    const{ name, price, imageUrl, quantity} = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);
    
    const clearItemHanlder = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckOutItemContainer>
        <div className='image-container'>
            <img src={imageUrl} alt={name} />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
            <span className="value">
                {quantity}
            </span>
            <div className="arrow" onClick={addItemHandler}>&#10095;</div>
        </span>
        <span className='price'>$ {price}</span>
        <div className="remove-button" onClick={clearItemHanlder}>&#10005;</div>
    </CheckOutItemContainer>
  )
}

export default CheckoutItem;