import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/fiebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

//as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
});

//actual component 
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({}); 

    /* ------ We used this only once to put our data in data-base --------- */
    // useEffect(() => {
    //   addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);
    
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    ) 
}