import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCarOpen: () => {}
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCarOpen] = useState(false);
    const value = {isCartOpen, setIsCarOpen};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

};