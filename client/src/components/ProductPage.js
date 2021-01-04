import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStateValue } from "./contextAPI/StateProvider";
import Product from "./Product";
import "./Product.css";

function ProductPage() {
  const [{ productsData, items }, dispatch] = useStateValue();
  const [productInfo, setProductInfo] = useState();
  let { prodId } = useParams();
  prodId = prodId * 1;

  
  useEffect(() => {
    const getProductDetails = () => {
      productsData.forEach((product) => {
        if (product.id === prodId) {
          setProductInfo(product);
          console.log(items)
        }
      });
    };
    
    getProductDetails()
     
  }, [prodId, productInfo, productsData, items]);

  return (
    <div className="container">
      <Product
        id={productInfo?.id}
        name={productInfo?.name}
        price={productInfo?.price}
        description={productInfo?.description}
        pQty={productInfo?.pQty}
      />

      <div className="similar__products">
        <div className="similar__product">
          <img src="/img/item-5.png" alt="" />
          <h3>Item name</h3>
          <p>price</p>
        </div>
        <div className="similar__product">
          <img src="/img/item-4.png" alt="" />
          <h3>Item name</h3>
          <p>price</p>
        </div>
        <div className="similar__product">
          <img src="/img/item-3.png" alt="" />
          <h3>Item name</h3>
          <p>price</p>
        </div>
        <div className="similar__product">
          <img src="/img/item-2.png" alt="" />
          <h3>Item name</h3>
          <p>price</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
