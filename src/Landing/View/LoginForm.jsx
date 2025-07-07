import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication (replace with real authentication logic)
    if (email === "admin@crypto.com" && password === "admin123") {
      navigate("/");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="login-form">
          <h2>Sign In</h2>
          <p>Sign in to access the CryptoZone admin panel.</p>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signin-btn" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="illustration-section">
        <h2>CryptoZone</h2>
        <p>Secure Crypto Admin Panel</p>
      </div>
    </div>
  );
};

export default LoginForm;
