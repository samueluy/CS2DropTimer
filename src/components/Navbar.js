import React from "react";
import logo from "../assets/img/logo.png";
import steamIcon from "../assets/img/SteamLogo.png";
import "../assets/style.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div>
        <h1 className="title">CS2 Drop Reset Timer</h1>
      </div>
      <div>
        <img src={steamIcon} alt="Steam Icon" className="steam-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
