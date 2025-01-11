import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/logo-ecommerce.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // To navigate to the next screen

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "test@gmail.com" && password === "123456") {
      navigate("/order-list"); // Navigate to the next screen
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="email">Email Address/Username</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
