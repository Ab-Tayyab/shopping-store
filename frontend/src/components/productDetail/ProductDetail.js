
import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"; // import useNavigate
import menDataCollection from "../data/menCollections";
import { addToCart } from "../../reduxStore/action/CartAction";
import { useDispatch } from "react-redux";
import "./ProductDetail.css";
import Navbar from "../navbar/Navbar";

const ProductDetail = ({ cart, setCart }) => {
  const location = useLocation();
  const { id } = useParams();
  const productID = location.state?.id || id;
  const navigate = useNavigate(); // Hook for navigation
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item.id)); // Dispatch the action to add the item to the cart
    navigate("/shoppingCart"); // Navigate to the shopping cart after adding the item
  };

  return (
    <div>
      <Navbar />
      <div className="detail-container">
        <h1>Product Details</h1>
        {menDataCollection.map((item, index) => {
          if (item.id === productID) {
            return (
              <div className="detail-card" key={index}>
                <div className="img-container">
                  <img src={item.img} className="detail-img" alt={item.name} />
                </div>
                <div className="detail-content">
                  <p>{item.category}</p>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  {item.discount && <p>Discount: {item.discount}</p>}
                  <button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetail;
