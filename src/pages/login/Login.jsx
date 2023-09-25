import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <img
          className="loginLogo"
          src="https://o.remove.bg/downloads/9563bbfd-5189-4d5c-8bcf-6c5938cb0e71/download-removebg-preview.png"
          alt=""
        />
        <form className="loginForm">
          <h1 className="loginTitle">Sign in to your Account</h1>
          <div className="loginItem">
            <label>Email</label>
            <input type="text" placeholder="email" />
          </div>
          <div className="loginItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <button className="loginButton">Continue</button>
        </form>
        <button className="link-btn">
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
}
// onClick={() => props.onFormSwitch("register")}
