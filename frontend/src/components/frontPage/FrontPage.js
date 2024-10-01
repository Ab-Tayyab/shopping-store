import React from "react";
import "./FrontPage.css";
import bg from "../../assets/video/bg.mp4";
import logo from "../../assets/photo/logo.svg";
import Navbar from "../navbar/Navbar";

function FrontPage() {
  return (
    <div className="video-container">
      <Navbar />
      <video autoPlay loop muted playsInline className="video-bg">
        <source src={bg} type="video/mp4" />
      </video>
      <div className="content">
        <img src={logo} className="site-logo" />
        <p>Men</p>
        <p>Women</p>
        <p>Kids</p>
      </div>
    </div>
  );
}

export default FrontPage;
