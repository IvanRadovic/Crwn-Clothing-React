import { createContext, useState, useEffect } from "react";


        /* ---------- Adding Item to Cart ------------ */
const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productAdd
    const existringCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    //if found, icrement quantity
    if(existringCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id ? {...cartItem, quantity : cartItem.quantity + 1 } :cartItem
        )
    }
    //return new array with modified cartItems
    return [...cartItems, { ...productToAdd, quantity:1}];
}


        /* --------- Remove CartItem ----------- */
const removeCartItem = (cartItems, CartItemToRemove) => {
    //find to cartItem to remove
    const existringCartItem = cartItems.find((cartItem) => cartItem.id === CartItemToRemove.id);
    //check if quantaty is equal to 1, if it is remove..
    if(existringCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== CartItemToRemove.id); //reverse filter
    }
    //return back cartItem with mathicng cart
    return cartItems.map((cartItem) => 
            cartItem.id === CartItemToRemove.id ? {...cartItem, quantity : cartItem.quantity - 1 } :cartItem
        )
}

        /* ------------- Clear CartItem -------------- */
    const clearCartItem = (cartItems, CartItemToClear) => cartItems.filter(cartItem => cartItem.id !== CartItemToClear.id);



export const CartContext = createContext({
    isCartOpen: false,
    setIsCarOpen: () => {},
    cartItems:[], // we want to put quantity in array
    addItemToCart: () => {}, //addding item to cart
    removeItemFromCart: () => {}, // removing item from cart
    clearItemFromCart: () => {},
    cartCount: 0, 
    cartTotal:0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCarOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCarCount] = useState(0);
    const [cartTotal, setCartTotal]= useState(0);

    //counting quantity
    useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCarCount(newCartCount);
    }, [cartItems]);

    // total
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price , 0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    //addItem to Cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    //removeItem from Cart
    const removeItemToCart = (CartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, CartItemToRemove));
    }

    //clearItem from Cart
    const clearItemFromCart = (CartItemToClear) => {
        setCartItems(clearCartItem(cartItems, CartItemToClear));
    }
    
    const value = { 
        isCartOpen, 
        setIsCarOpen, 
        addItemToCart, 
        cartItems, 
        removeItemToCart,
        clearItemFromCart, 
        cartCount, 
        cartTotal,
    };
        

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

};