import React, { createContext, useContext } from "react";
import productsList from "../Components/Products/ProductsList";
import { cartReducer } from "./Reducers";

const Cart = createContext()

const Context = ({ children }) => {

    const products = productsList

    const [state, dispatch] = React.useReducer(cartReducer, {products: products, cart: []})

    return(
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}