import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component"
import CartItem from "../cart-item/cart-item.component";

/* --- Styled Components ---- */
import { CartDropdownContainer, CartItems } from "./cart-dropdown.style";

const CartDropDown = () => {

  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
    <CartDropdownContainer>
        <CartItems>
            { cartItems.map ((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
        </CartItems>
        <Button onClick ={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropDown;