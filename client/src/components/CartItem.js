import React, { useState } from "react";
import { StateValue } from "./contextAPI/cartContext";

function CartItem({ name, price, pQty, id, totalPrice,image }) {
  const [qty, setQty] = useState(1);
  const [state, dispatch] = StateValue();
  let prodId = id;
  const removeFromCart = () => {
    let cartItem ; 
    cartItem = state.items.filter((product) => product.id === prodId);
    
    if (cartItem) {
      let index = state.items.findIndex(cartItem => cartItem.id = prodId)
      dispatch({
        type: "REMOVE_ITEM",
        payload: {
          cartCount: (state.cartCount <= 0 ? state.cartCount = 0 :  state.cartCount -= 1),
          items: state.items.splice(index,1),
        }, 
      });
      console.log('Item removed from cart!');
    }

    console.log(state);
  };
  const incQty = () => {
    
    dispatch({
      type: 'INCREASE',
      payload: {
        id,
        cartCount: state.cartCount,
        items: state.items
      }
    })
    
    console.log(state.items);
  };
  const decQty = () => {
    dispatch({
      type: 'DECREASE',
      payload: {
        id,
        cartCount: state.cartCount,
        items: state.cartItems
      }
    })
  };
  
  return (
    <li className="cart__item">
      <div className="cart__item--info">
        <img src={image} alt="" />
        <p>{name}</p>
      </div>
      <div className="cart__item--qty">
        <button className="dec" onClick={decQty}>
          -
        </button>
        <span className="qty">{pQty}</span>
        <button className="inc" onClick={incQty}>
          +
        </button>
      </div>  
      <div className="cart__item--price">
        <h3>{totalPrice}</h3>
      </div>
      <span onClick={removeFromCart}>X</span>
    </li>
  );
}

export default CartItem;
