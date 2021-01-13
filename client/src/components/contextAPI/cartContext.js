import React, { createContext, useContext, useReducer } from "react";
import {cartReducer} from "./cartReducer";

export const CartContext = createContext();


const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return (
  <CartContext.Provider value={{state, dispatch} }>
    {props.children}
  </CartContext.Provider>

  )
};


export default CartContextProvider;

export const StateValue = () => useContext(CartContext);