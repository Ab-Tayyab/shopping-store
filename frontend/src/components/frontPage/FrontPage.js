import React from "react";
import "./FrontPage.css";
import bg from "../../assets/video/bg.mp4";
import logo from "../../assets/photo/logo.svg";
import SideBar from "../navbar/SideBar";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div className="video-container">
      <SideBar />
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={bg} type="video/mp4" />
      </video>
      <div className="content">
        <img src={logo} className="site-logo" alt="site logo" />
        <Link to="/home?category=men" className="link">
          <p className="content-category">Men</p>
        </Link>
        <Link to="/home?category=women" className="link">
          <p className="content-category">Women</p>
        </Link>
        <Link to="/home?category=kids" className="link">
          <p className="content-category">Kids</p>
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
