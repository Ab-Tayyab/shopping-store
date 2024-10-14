import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../../reduxStore/action/CartAction";
import menDataCollection from "../data/menCollections"; 
import "./ShoppingCart.css"; 

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    let discountedTotal = 0;
  
    items.forEach((item) => {
      const product = menDataCollection.find((product) => product.id === item.id);
      if (product) { // Check if the product exists
        const discount = product.discount ? parseFloat(product.discount) / 100 : 0;
        const price = item.qty * product.price;
        const discountedPrice = price * (1 - discount);
  
        total += price;
        discountedTotal += discountedPrice;
      }
    });
  
    return { total, discountedTotal };
  };
  

  const { totalAmount, discountedAmount } = calculateTotal();

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.qty}</p>
              <button onClick={() => dispatch(increaseQty(item.id, menDataCollection))}>+</button>
              <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              <p>
                {item.discount && (
                  <span>
                    Discount: {item.discount} <br />
                    Discounted Price: ${(item.price * (1 - parseFloat(item.discount) / 100)).toFixed(2)}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="totals">
        <h3>Total: ${totalAmount ? totalAmount.toFixed(2) : 0}</h3>
        <h3>Discounted Total: ${discountedAmount ? discountedAmount.toFixed(2) : 0}</h3>
      </div>
    </div>
  );
  
};

export default ShoppingCart;
