import React from "react";
import "./Signup.css";
import account from '../../assets/photo/account.jpeg';

const Signup = () => {
  return (
    <div className="signup">
      <div>
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
            accept the Terms and Conditions of use and purchase, and I understand
            the information on the use of my personal data provided in the Privacy Policy.
          </p>

          <button>Agree and Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
