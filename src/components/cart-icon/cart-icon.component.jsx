import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

/* --- Styled Components --- */

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCarOpen, cartCount } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCarOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toogleIsCartOpen}>
        <ShoppingIcon className="shopping-icon"/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;