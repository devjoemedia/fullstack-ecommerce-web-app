import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Products.css";
import axios from './axios';

function Products() {
  const [products, setProducts]= useState([]);
  
useEffect(()=>{
  const getProducts = async ()=> {
    try {
      const {data} = await axios.get('/products');
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  getProducts();
},[])

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
        {products?.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={product.price}
            ratingsAvg={product.ratingsAvg}
            id={product.id}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
