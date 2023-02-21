import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";

import './cart-icon.style.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCarOpen } = useContext(CartContext);

  const toogleIsCartOpen = () => setIsCarOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toogleIsCartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon;