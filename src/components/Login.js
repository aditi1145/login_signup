import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import icon from "../assets/Rectangle 2@2x.png";
import hideIcon from "../assets/hide.png"; // Update path for hide icon
import visibleIcon from "../assets/visible.png"; // Update path for visible icon
import google from "../assets/Group 24.png";
import apple from "../assets/apple.png";
import userData from "../data/userData.json";

function Login({ toggleRegister, isRegistered }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists in the signupData.json
    const user = userData.find(
      (user) =>
        (user.email === usernameOrEmail || user.username === usernameOrEmail) &&
        user.password === password
    );

    if (user) {
      alert("Login successful!");
      localStorage.setItem("User", JSON.stringify(user.username));
      navigate(`/dashboard`); // Navigate to the dashboard if login is successful
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div>
          <img src={icon} alt="Illustrated Man" className="illustration" />
        </div>
        <div>
          <h1>Sign in to</h1>
          <b>Lorem Ipsum is simply</b>
          <p>
            If you don’t have an account register <br />
            You can <span onClick={toggleRegister}>Register here!</span>
          </p>
        </div>
      </div>
      <div className="login-right">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter email or user name"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <img
              src={passwordVisible ? hideIcon : visibleIcon}
              alt={passwordVisible ? "Hide password" : "Show password"}
              className="toggle-password"
              onClick={togglePasswordVisibility}
            />
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p>or continue with</p>
        <div className="social-icons">
          <img src={apple} alt="Apple" />
          <img src={google} alt="Google" />
        </div>
      </div>
    </div>
  );
}

export default Login;
