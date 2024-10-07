import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/i-bhimani-Logo-logo.png";

const Nevbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? 'green-nav' : ''}`}>
      <img className="nav-logo" src={logo} alt="Logo" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="btn">Contact</li>
      </ul>
    </nav>
  );
};

export default Nevbar;
