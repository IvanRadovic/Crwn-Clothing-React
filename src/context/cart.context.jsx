import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {

    // find if cartItems contains productAdd
    const existringCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    //if found, icrement quantity
    if(existringCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity +1 } :cartItem
        )
    }

    //return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity:1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCarOpen: () => {},
    cartItems:[], // we want to put quantity in array
    addItemToCart: () => {} //addding item to cart
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd));
    }
    
    const value = {isCartOpen, setIsCarOpen, addItemToCart, cartItems};


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

};