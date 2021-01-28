import React from "react";
import "./Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import axios from "./axios";
import { StateValue } from "./contextAPI/cartContext";

const stripePromise = loadStripe("pk_test_HP8QIZl7706wrnbQNmaHrNaR00nsrB4qjc");

function CheckoutForm() {
  const {
    state: { items },
    dispatch,
  } = StateValue();
  let subTotal = items
    .reduce((acc, item) => acc + item.price * item.pQty, 0)
    .toFixed(2);

  // e.preventDefault();
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const { data: session } = await axios.post("/pay-with-card", {
      amount: subTotal * 100,
      items: items,
    });
    // Reidrect to stripe hosted form
    console.log(session);
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
   
    
    // // handle errors if any
    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <div className="container">
      <div className=" checkout">
        <h1>Select Your payment method</h1>
        <div className="checkout__payWith--momo">
          <p>currently we only accept MTN mobile money!</p>
          <p>To pay with momo just click the button and follow the steps</p>
          <button disabled role="link" className="btn">
            pay with momo
          </button>
          <span>
            note we are now working on payment with momo please use the pay with
            card option below thanks
          </span>
        </div>
        <div className="checkout__payWith--card">
          <p>click here to pay with yor credit card</p>
          <button role="link" className="btn" onClick={handleClick}>
            pay with card
          </button>
        </div>
        <h4>Thank You for buying form EASYBUY.COM</h4>
      </div>
    </div>
  );
}
export default CheckoutForm;
