import React from 'react'
import { Link } from 'react-router-dom'

function Item({name,id, image,price,ratinsAvg}) {
  return (
    <div className="product">
            <div className="product-header">
              <span>Sale</span>
              <span className="liked">
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <img src={image} alt="Item-one" />
              <Link
                to={`/product/${id}`}
                className="product-title"
              >
                {name}
              </Link>
            <p className="product-color">(black and white)</p>
            <div className="product-rating">
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star-half-alt"></i>
              </span>
              <span>
                <i className="far fa-star"></i>
              </span>
              <span>{ratinsAvg}</span>
            </div>
            <div className="product-footer">
              <span className="product-price">$ {price}</span>
              <span>
                {" "}
                <i className="fas fa-shopping-cart"></i>
              </span>
            </div>
          </div>
  )
}

export default Item
