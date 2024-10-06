import React from "react";
import SideBar from "./SideBar";
import "./Navbar.css";
import logo from "../../assets/photo/logo.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div>
          <SideBar />
        </div>
        <div className="img">
          <img src={logo} />
        </div>
        <div>Cart</div>
      </div>
    </div>
  );
};

export default Navbar;
