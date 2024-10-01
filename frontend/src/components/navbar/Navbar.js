import React, { useState } from "react";
import logo from "../../assets/photo/logo2.webp";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const handletoggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="navbar-container">
      <i class="fa fa-bars" onClick={handletoggle}></i>

      <nav className={`navbar ${menu ? "nav-open" : "nav-close"}`}>
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
            <p>Home</p>
            <p>Account</p>
            <p>Order</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
