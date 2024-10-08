import React from "react";
import "./Signup.css";
import account from "../../assets/photo/account.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup">
      <div className="img-container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <i className="fa fa-long-arrow-left return-arrow"></i>
        </Link>
        <img src={account} alt="tasveer" />
      </div>
      <div>
        <form className="register">
          <h1 className="account-heading">Create Account</h1>

          <div>
            <input type="text" placeholder=" " required />
            <label>First name</label>
          </div>

          <div>
            <input type="text" placeholder=" " required />
            <label>Last name</label>
          </div>

          <div>
            <input type="email" placeholder=" " required />
            <label>Email</label>
          </div>

          <div>
            <input type="password" placeholder=" " required />
            <label>Password</label>
          </div>

          <p>
            By clicking “ACCEPT AND CONTINUE”, I confirm that I have read and
            accept the Terms and Conditions of use and purchase, and I
            understand the information on the use of my personal data provided
            in the Privacy Policy.
          </p>

          <button className="submit-btn">AGREE AND CONTINUE</button>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="toggle-btn submit-btn">
              ALREADY HAVE ACCOUNT
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
