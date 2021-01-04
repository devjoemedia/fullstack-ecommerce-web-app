import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./contextAPI/StateProvider";
import Item from "./Item";
import "./Products.css";

function Products() {
  const [{productsData}, dispatch] = useStateValue();
  
  return (
    <div className="products">
      <nav className="navBar">
        <ul>
          <li>
            <a href="#">Popular producst</a>
          </li>
          <li>
            <a href="#">Low Price</a>
          </li>
          <li>
            <a href="#">High Price</a>
          </li>
        </ul>
        <span>
          <i className="fas fa-bars"></i>
        </span>
      </nav>
      <div className="products-inner">
        {productsData.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            ratingsAvg={product.ratingsAvg}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
