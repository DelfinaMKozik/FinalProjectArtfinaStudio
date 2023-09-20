import React, {createContext, useState} from 'react';
import {ProductsList} from "../components/ProductsList";
export const ShopContext = createContext(null);

const getDefaultBag = () => {
    let bag = {};
    for (let i= 1; i < ProductsList.length; i++){
        bag[i] = 0;
    }
    return bag;
}

export const ShopContextProvider = (props) => {
    const [bagItems, setBagItems] = useState(getDefaultBag());

    const addToBag = (itemId) => {
        setBagItems((prev) => ({...prev, [itemId] : prev[itemId] + 1 }))
    }

    const removeFromBag = (itemId) => {
        setBagItems((prev) => ({...prev, [itemId] : prev[itemId] - 1 }))
    }

    const updateBagItemCount = (newAmount, itemId) => {
        setBagItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {bagItems, addToBag, removeFromBag, updateBagItemCount}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
}

// export default ShopContext;