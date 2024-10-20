import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/i-bhimani-Logo-logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = (Header) => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`container ${sticky || Header ? 'green-nav' : ''}`}>
      <img className="nav-logo" src={logo} alt="Logo" />
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <li className='hover-effect'>
        <li className='hover-effect'>
          <Link className="nav-path" to="/">Home</Link>
        </li>
        </li>
        <li className= 'hover-effect'>Explore</li>
        <li className='hover-effect'>About</li>
        <li className='hover-effect'>
          <Link className="nav-path" to="/services">Service</Link>
        </li>
        <li className="btn">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
