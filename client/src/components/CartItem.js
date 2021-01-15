import React from "react";
import { StateValue } from "./contextAPI/cartContext";

function CartItem({ name, price, pQty, id, totalPrice, image }) {
  const {
    state: { items },
    dispatch,
  } = StateValue();
  let prodId = id;

  const removeFromCart = () => {
    let cartItem;
    cartItem = items.filter((product) => product.id === prodId);

    if (cartItem) {
      let index = items.findIndex((cartItem) => cartItem.id === prodId);
      dispatch({
        type: "REMOVE_ITEM",
        payload: {
          items: items.splice(index, 1),
        },
      });
      console.log("Item removed from cart!");
    }
  };
  const incQty = () => {
    let item = items[items.findIndex((item) => item.id === id)];
    let index = items.findIndex((item) => item.id === id);

    item.pQty < 5 ? item.pQty+=1 : (item.pQty = 5);
    item.totalPrice = (item.pQty * item.price).toFixed(2);

    dispatch({
      type: "INCREASE",
      payload: {
        id,
        items: items.splice(index,1, item),
      },
    });
  };
  const decQty = () => {
    let item = items[items.findIndex((item) => item.id === id)];
    let index = items.findIndex((item) => item.id === id);

    item.pQty > 1 ? item.pQty-=1 : (item.pQty = 1);
    item.totalPrice = (item.pQty * item.price).toFixed(2);

    dispatch({
      type: "INCREASE",
      payload: {
        id,
        items: items.splice(index,1, item),
      },
    });
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
      <span onClick={removeFromCart} className="remove__item">
        X
      </span>
    </li>
  );
}

export default CartItem;
