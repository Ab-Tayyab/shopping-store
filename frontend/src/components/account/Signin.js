import React from "react";
import "./Signup.css";
import account from "../../assets/photo/account.jpeg";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signup">
      <div className="img-container">
        <Link to="/" style={{textDecoration:"none"}}>
        <i className="fa fa-long-arrow-left return-arrow"></i>
        </Link>
        <img src={account} alt="tasveer" />
      </div>
      <div>
        <form className="register">
          <h1 className="account-heading1">Login Account</h1>
          <div>
            <input type="email" placeholder=" " required />
            <label>Email</label>
          </div>

          <div>
            <input type="password" placeholder=" " required />
            <label>Password</label>
          </div>
          <p>Forget your password</p>

          <button className="submit-btn">LOG IN</button>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="toggle-btn submit-btn">CREATE ACCOUNT</button>
          </Link>
          <h1 className="account-heading2 account-heading1">
            YOU CAN ALSO ACCESS WITH
          </h1>
          <p>
            By logging/signing in with my social login, I agree to connect my
            account in accordance with the Privacy Policy.
          </p>
          <div className="btn-container">
            <button className="submit-btn fb-btn">SIGN IN WITH FACEBOOK</button>
            <i className="fa fa-facebook"></i>
          </div>
          <div className="btn-container">
            <button className="submit-btn toggle-btn">
              SIGN IN WITH GOOGLE
            </button>
            <i className="fa fa-google g-icon"></i>
          </div>
          <div className="btn-container">
            <button className="submit-btn toggle-btn">
              Sign in with Apple
            </button>
            <i className="fa fa-apple a-icon"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
