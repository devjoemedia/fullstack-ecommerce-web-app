import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './CheckoutForm.css'

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  
  return (
    <div className="checkout">

    <form onSubmit={handleSubmit}>
      <div className="input__ctn">
        <input type="text" name="name" placeholder="name" required/>
      </div>
      <div className="input__ctn">
        <input type="text" name="email" placeholder="email" required/>
      </div>
      <div className="input__ctn">
        <input type="text" name="country" placeholder="country" required/>
      </div>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    </div>
  );
}

export default CheckoutForm;
