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
        <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank" rel="noopener noreferrer">
        <img src={steamIcon} alt="Steam Icon" className="steam-icon" />
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;
