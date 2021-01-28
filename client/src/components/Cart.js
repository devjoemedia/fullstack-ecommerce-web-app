import React, { useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { StateValue } from "./contextAPI/cartContext";

function Cart() {
  let { state, dispatch } = StateValue();

  const subTotal = state.items
    .reduce((acc, item) => acc + item.price * item.pQty, 0)
    .toFixed(2);
  useEffect(() => {
    console.log(state.items);
  }, [state.items]);
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };
  return (
    <div className="container">
      <div className="cart">
        <div className="cart__content">
          <ul>
            <div className="cart__desc">
              <h1>({state.items.length}) Items in Cart</h1>
              <button className="btn clear" onClick={clearCart}>
                clear
              </button>
            </div>
            {state.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                pQty={item.pQty}
                image={item.image}
                totalPrice={item.totalPrice}
              />
            ))}
            <div className="cart__item">
              <Link to="/" className="btn">
                Continue Shoping
              </Link>
              <Link to="/checkout" className="btn">
                checkout
              </Link>
              <p>Subtotal: {subTotal}</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
