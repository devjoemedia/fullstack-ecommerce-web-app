import React, { useState } from "react";
import "./Cart.css";
import CheckoutForm from "./Checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "./CartItem";
import { useStateValue } from "./contextAPI/StateProvider";
import { Link } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51GzSODEDr9DWjj2gPMLSz1OtjigNlN7XcXOwKoEu0BtOghzQVyZSXlYneJen6Rhy1pv0RhT9WWyrSbxOxQDNE0cF00C0c2cRig"
);

function Cart() {
  const [{ cartCount, items }, dispatch] = useStateValue();

  let stotal = 0;
  if (items.length > 0) {
    items.forEach((item) => {
      // stotal = stotal * 1;
      item.totalPrice = item.totalPrice * 1;
      stotal = stotal + item.totalPrice;
    });
  } else {
    stotal = 0;
  }
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
              <p>Subtotal: {stotal}</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
