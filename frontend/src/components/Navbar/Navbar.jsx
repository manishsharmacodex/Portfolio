import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { ContextProvider } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { title } = useContext(ContextProvider);
  const [menu, setMenu] = useState("Home");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);


  return (
    <div className={`navbar ${sticky ? "nav-sticky" : ""}`}>
      <h1 className="logo">{title}</h1>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("Services")}
          className={menu === "Services" ? "active" : ""}
        >
          Services
        </li>
        <li
          onClick={() => setMenu("Expreinces")}
          className={menu === "Expreinces" ? "active" : ""}
        >
          Expreinces
        </li>
        <li
          onClick={() => setMenu("Gallery")}
          className={menu === "Gallery" ? "active" : ""}
        >
          Gallery
        </li>
        <li
          onClick={() => setMenu("About Me")}
          className={menu === "About Me" ? "active" : ""}
        >
          <Link to="/about">About Me</Link>
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <button>sign in</button>
        <button>download</button>
      </div>
    </div>
  );
};

export default Navbar;
