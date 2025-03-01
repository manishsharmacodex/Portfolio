import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Hey I'm Manish Kumar Sharma</h1>
      <p>Web Developer & App Developer</p>
      <div className="header-btn">
        <div>
          <button>Project Manager</button>
          <div className="home-btn"></div>
        </div>
        <div>
          <button>See Project</button>
          <div className="home-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
