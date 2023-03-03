import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

/* --- Styled Components --- */

import { CartIconContainer, ItemCount } from "./cart-icon.style.jsx";

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