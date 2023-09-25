import React from "react";
import "./signUp.css";

export default function SignUp() {
  return (
    <div className="signUp">
      <div className="signUpContainer">
        <img
          className="signUpLogo"
          src="https://o.remove.bg/downloads/9563bbfd-5189-4d5c-8bcf-6c5938cb0e71/download-removebg-preview.png"
          alt=""
        />
        <form className="signUpForm">
          <h1 className="signUpTitle">Create New Account</h1>
          <div className="signUpItem">
            <label>First Name</label>
            <input type="text" placeholder="username" />
          </div>
          <div className="signUpItem">
            <label>Last Name</label>
            <input type="text" placeholder="full name" />
          </div>
          <div className="signUpItem">
            <label>Email</label>
            <input type="email" placeholder="email" />
          </div>
          <div className="signUpItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <div className="signUpItem">
            <label>Confirm Password</label>
            <input type="text" placeholder="confirm password" />
          </div>
          <button className="signUpButton">Sign Up</button>
        </form>
        <button className="link-btn">
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
}
// onClick={() => props.onFormSwitch("login")}
