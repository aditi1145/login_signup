import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/hamburger.png";
const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburger} alt="ham" />
      </div>
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="logo-container">
          <img src={logo} alt="logo" />
          <div className="logo">BankDash</div>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#dashboard" className="active">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#transactions">Transactions</a>
            </li>
            <li>
              <a href="#accounts">Accounts</a>
            </li>
            <li>
              <a href="#investments">Investments</a>
            </li>
            <li>
              <a href="#credit-cards">Credit Cards</a>
            </li>
            <li>
              <a href="#loans">Loans</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#privileges">My Privileges</a>
            </li>
            <li>
              <a href="#settings">Setting</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
