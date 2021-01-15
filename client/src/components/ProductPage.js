import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import "./Product.css";
import axios from "./axios";

function ProductPage() {
  const [productInfo, setProductInfo] = useState([]);
  let { prodId } = useParams();
  prodId = prodId * 1;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("/product/" + prodId);
        setProductInfo(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [prodId]);

  return (
    <div className="container">
      <Product
        id={productInfo?.id}
        name={productInfo?.name}
        price={productInfo?.price}
        description={productInfo?.description}
        pQty={productInfo?.pQty}
        image={productInfo.image}
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
