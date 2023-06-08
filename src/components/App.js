import React from "react";
import Countdown from "./Countdown";
import Navbar from "./Navbar";
import DonateButton from "./DonateButton";
import "../assets/style.css"

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="content">
      <Navbar/>
      <Countdown />
      <DonateButton/>
      
      </div>
     
    </div>
  );
}

export default App;
