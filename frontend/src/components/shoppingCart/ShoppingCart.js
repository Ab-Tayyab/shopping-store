import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../reduxStore/action/CartAction";
import menDataCollection from "../data/menCollections";
import "./ShoppingCart.css"; // Ensure your CSS reflects the new design

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    let discountedTotal = 0;
  
    items.forEach((item) => {
      const product = menDataCollection.find((product) => product.id === item.id);
      if (product) {
        const discount = product.discount ? parseFloat(product.discount) / 100 : 0;
        const price = item.qty * product.price;
        const discountedPrice = price * (1 - discount);
  
        total += price;
        discountedTotal += discountedPrice;
      }
    });
  
    return { total, discountedTotal }; // Correct keys
  };
  
  // Use the correct variable names when destructuring
  const { total: totalAmount, discountedTotal: discountedAmount } = calculateTotal();
  

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {items.map((item) => (
            <li key={item.id} className="cart-item">
              {/* Product Image */}
              <div className="product-image">
                <img src={item.img} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="product-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                {item.discount && (
                  <p>
                    Discount: {item.discount}% <br />
                    Discounted Price: $
                    {(
                      item.price *
                      (1 - parseFloat(item.discount) / 100)
                    ).toFixed(2)}
                  </p>
                )}

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => dispatch(increaseQty(item.id, menDataCollection))}>
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Totals Section */}
      <div className="totals">
        <h3>Total: ${totalAmount ? totalAmount.toFixed(2) : 0}</h3>
        <h3>
          Discounted Total: $
          {discountedAmount ? discountedAmount.toFixed(2) : 0}
        </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
