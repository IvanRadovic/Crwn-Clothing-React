import { createContext, useState } from "react";
import PRODCUTS from "../shop-data.json";

//as the actual value you want to access
export const ProductsContext = createContext({
    products: []
});

//actual component 
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODCUTS); 
    const value = {products};
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    ) 
}