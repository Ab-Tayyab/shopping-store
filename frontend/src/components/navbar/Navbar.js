import React from "react";
import SideBar from "./SideBar";
import "./Navbar.css";
import logo from "../../assets/photo/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="nav-container">
      <div className="nav">
        <SideBar className="sideBar" />
        <div>
          <Link to="/">
            <img src={logo} className="img" />
          </Link>
        </div>
        <div className="cart">
          <Link
            to="/shoppingCart"
            style={{ textDecoration: "none", color: "white" }}
          >
            <i class="fa fa-shopping-cart"></i>
            {items.map((item) => {
              return <p className="item-qty">{item.qty}</p>;
            })}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
