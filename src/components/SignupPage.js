import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import icon from "../assets/Rectangle 2@2x.png";
import hideIcon from "../assets/hide.png";
import visibleIcon from "../assets/visible.png";
import google from "../assets/Group 24.png";
import apple from "../assets/apple.png";

const SignupPage = ({ toggleRegister, isRegistered }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isUsernameValid = (username) => {
    return username.length >= 3;
  };

  const isContactNumberValid = (contactNumber) => {
    return /^\d{10,}$/.test(contactNumber); // At least 10 digits
  };

  const isPasswordValid = (password) => {
    return password.length >= 6; // Minimum password length
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (
      !email ||
      !username ||
      !contactNumber ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Validate email format
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate username length
    if (!isUsernameValid(username)) {
      alert("Username should be at least 3 characters long.");
      return;
    }

    // Validate contact number format
    if (!isContactNumberValid(contactNumber)) {
      alert("Please enter a valid contact number with at least 10 digits.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Validate password strength
    if (!isPasswordValid(password)) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    const newUser = { email, username, contactNumber, password };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email or username already exists
    const userExists = existingUsers.some(
      (user) => user.email === email || user.username === username
    );

    if (userExists) {
      alert("User with this email or username already exists");
    } else {
      // Add new user to the list and save it to localStorage
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Signup successful!");
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <div>
          {" "}
          <h1>Sign Up to</h1>
          <b>Lorem Ipsum is simply</b>
          <p>
            If you already have an account
            <br />
            <span onClick={toggleRegister}>Login here!</span>
          </p>
        </div>

        <div>
          <img src={icon} alt="Illustrated Man" className="illustration" />
        </div>
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Create User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <div className="password-field">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              <img
                src={passwordVisible ? hideIcon : visibleIcon}
                alt={passwordVisible ? "Hide password" : "Show password"}
                className="password-toggle-icon"
                onClick={() => setPasswordVisible(!passwordVisible)}
              />
          </div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
        <p>or continue with</p>
        <div className="social-icons">
          <span className="icon apple-icon">
            <img src={apple} alt="Apple" />
          </span>
          <span className="icon google-icon">
            <img src={google} alt="Google" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
