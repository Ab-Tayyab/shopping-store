import React from "react";
import Navbar from "../navbar/Navbar";
import GetEmail from "../getEmail/GetEmail";
import "./Contact.css";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-navbar">
        <Navbar />
      </div>
      <div className="contact-container">
        <div>
          <h1 className="contact-heading">CONTACT US</h1>
          <form className="contact-form">
            <div className="input-wrapper">
              <input
                placeholder="Enter your name"
                type="text"
                className="contact-in-name c-input"
                id="name"
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="input-wrapper">
              <input
                placeholder="Enter your email"
                type="email"
                className="contact-in-email c-input"
                id="email"
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-wrapper">
              <textarea
                placeholder="Write your message"
                className="contact-in-textarea c-input"
                id="message"
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="contact-btn">
              Send
            </button>
          </form>
        </div>
      </div>
      <div>
        <GetEmail />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
