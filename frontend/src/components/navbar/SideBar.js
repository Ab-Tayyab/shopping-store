import React, { useState } from "react";
import logo from "../../assets/photo/logo2.webp";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  const [menu, setMenu] = useState(false);
  const handletoggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="sidebar-container">
      <i class="fa fa-bars" onClick={handletoggle}></i>

      <nav className={`sidebar ${menu ? "nav-open" : "nav-close"}`}>
        <div className="nav-icon">
          <i class="fa fa-close" onClick={handletoggle}></i>
          <img src={logo} className="nav-logo" />
        </div>
        <p>Men</p>
        <p>women</p>
        <p>Kids</p>
        <p>New Arrivals</p>
        <p>Sales</p>
        <div className="page-link">
          <div>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <p>Home</p>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Account</p>
            </Link>
            <Link
              to="/order"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Order</p>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
