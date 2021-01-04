import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStateValue } from "./contextAPI/StateProvider";
import "./Product.css";

function Product({ name, price, pQty, description, id }) {
  const [state, dispatch] = useStateValue();
  let { prodId } = useParams();
  prodId = prodId * 1;

  const addToCart = () => {
    let cartItem ;
    cartItem = state.items.find((product) => product.id === prodId);
  
    if (!cartItem) {
      cartItem = state.productsData.find((product) => product.id === prodId);
      let qty = 1;
      let totalPrice = cartItem.price * qty;

      dispatch({
        type: "ADD_ITEM",
        payload: {
          cartCount: (state.cartCount += 1),
          items: state.items.push({...cartItem,pQty:qty,totalPrice}),
        },
      });
    } else {
      console.log('Item already in cart!');
    }

    console.log(state);
  };

  return (
    <div className="singleProduct">
      <div className="singleProduct__image">
        <img src="/img/item-5.png" alt="" />
      </div>
      <div className="singleProduct__info">
        <div className="singleProduct__info--header">
          <h1>{name}</h1>
        </div>
        <div className="sinsingleProduct__info--details">
          <p>{description}</p>
          <p>{description}</p>
        </div>
        <div className="singleProduct__info--price">
          <h2>{price}</h2>
        </div>
        <div className="singleProduct__info--footer">
          <div className="product--action">
            <button className="add-to-cart btn" onClick={addToCart}>
              Add to cart
            </button>
            <Link to="/checkout" className="btn">
              continue to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
