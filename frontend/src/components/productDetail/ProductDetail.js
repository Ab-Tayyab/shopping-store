import React from "react";
import { useLocation, useParams } from "react-router-dom";
import menDataCollection from "../data/menCollections";
import './ProductDetail.css'

const ProductDetail = () => {
  const location = useLocation();
  const { id } = useParams();
  const productID = location.state?.id || id;
  console.log(productID);
  return (
    <div className="detail-container">
      <h1>Product Details</h1>
      {menDataCollection.map((item, index) => {
        if (item.id === productID) {
          return (
            <div className="detail-card" key={index}>
              <div className="img-container">
                <img src={item.img} className="detail-img" />
                <img src={item.img} className="detail-img" />
              </div>
              <div className="detail-content">
                <p>{item.category}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>Pay in 3 Easy Installments</p>
                <button>Add to cart</button>

              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductDetail;
