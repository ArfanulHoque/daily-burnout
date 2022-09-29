import React from "react";
import logo from "../../images/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h2>Daily Burnout</h2>
    </div>
  );
};

export default Header;
