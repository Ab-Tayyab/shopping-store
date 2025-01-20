import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../../reduxStore/action/CartAction";
import menDataCollection from "../data/menCollections";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const calculateTotal = () => {
    let total = 0;
    let discountedTotal = 0;

    items.forEach((item) => {
      const product = menDataCollection.find(
        (product) => product.id === item.id
      );
      if (product) {
        const discount = product.discount
          ? parseFloat(product.discount) / 100
          : 0;
        const price = item.qty * product.price;
        const discountedPrice = price * (1 - discount);

        total += price;
        discountedTotal += discountedPrice;
      }
    });

    return { total, discountedTotal };
  };

  const { total: totalAmount, discountedTotal: discountedAmount } =
    calculateTotal();

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">
            <button className="home-return-btn">Go To Home</button>
          </Link>
        </div>
      ) : (
        <ul className="cart-items">
          {items.map((item) => {
            const product = menDataCollection.find(
              (product) => product.id === item.id
            );
            const discount = product?.discount
              ? parseFloat(product.discount) / 100
              : 0;
            const itemTotal = item.qty * product.price;
            const discountedItemTotal = itemTotal * (1 - discount);

            return (
              <div key={item.id} className="grid-container">
                <div className="grid-item image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="grid-item name">{item.name}</div>
                <div className="grid-item price">
                  <p>Price: ${item.price.toFixed(2)}</p>
                  {item.discount && (
                    <p>
                      Discount: {item.discount}% <br />
                      Discounted Price: $
                      {(item.price * (1 - discount)).toFixed(2)}
                    </p>
                  )}
                </div>
                <div className="grid-item quantity">
                  <button
                    onClick={() =>
                      dispatch(increaseQty(item.id, menDataCollection))
                    }
                  >
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => dispatch(decreaseQty(item.id))}>
                    -
                  </button>
                </div>
                <div className="grid-item total">
                  <h3>
                    Total: $
                    {item.discount
                      ? discountedItemTotal.toFixed(2)
                      : itemTotal.toFixed(2)}
                  </h3>
                </div>
                <div className="grid-item remove">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      )}

      <div className="totals">
        <h3>Total: ${totalAmount ? totalAmount.toFixed(2) : 0}</h3>
        <h3>
          Discounted Total: $
          {discountedAmount ? discountedAmount.toFixed(2) : 0}
        </h3>
        <button className="shop-now-btn">Shop Now</button>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
