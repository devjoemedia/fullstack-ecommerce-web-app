import React, { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.items));

  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const StateValue = () => useContext(CartContext);
