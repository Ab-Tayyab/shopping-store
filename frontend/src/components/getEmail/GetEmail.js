import React from "react";
import "./GetEmail.css";

const GetEmail = () => {
  return (
    <div className="home-contact">
      <form className="get-email-form">
        <h1>GET THE LATEST TRENDS FIRST</h1>
        <div>
          <input type="email" placeholder=" " required className="get-email-input"/>
          <label>Email Address</label>
          <i className="fa fa-long-arrow-right"></i>
        </div>
      </form>
      <div className="contact-icon">
        <i class="fa fa-facebook" />
        <i class="fa fa-instagram" />
        <i class="fa fa-youtube" />
        <i class="fa fa-twitter" />
      </div>
    </div>
  );
};

export default GetEmail;
