import React, { useEffect } from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { StateValue } from "./contextAPI/cartContext";



function Cart() {
  const [{ cartCount, items }, dispatch] = StateValue();

  // useEffect(()=>{
  //   console.log('items',items);
  // },[items])
  // let stotal = 0;
  // if (items.length > 0) {
  //   items.forEach((item) => {
  //     // stotal = stotal * 1;
  //     item.totalPrice = item.totalPrice * 1;
  //     stotal = stotal + item.totalPrice;
  //   });
  // } else {
  //   stotal = 0;
  // }
  return (
    <div className="container">
      <div className="cart">
        <h1>({cartCount}) Items in Cart</h1>
        <div className="cart__content">
          <ul>
            {items.map((item) => (
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
              <Link to="/">Continue Shoping</Link>
            <Link to="/checkout" className="btn">
              checkout
             </Link> 
              <p>Subtotal: 234234</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
