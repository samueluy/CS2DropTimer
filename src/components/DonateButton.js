import React from "react";
import "../assets/style.css";

const DonateButton = () => {
    const handleClick = () => {
      window.open("https://your-donation-link.com", "_blank"); // Open link in a new tab
    };
  
    return (
      <div className="donate-button">
        <button onClick={handleClick}>Donate Here</button>
      </div>
    );
  };
  
  export default DonateButton;