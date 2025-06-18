import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/image.png"; // update path if different

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Mauli Construction Logo" className="logo-img" />
        </Link>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/contact">
          <button className="btn mobile-btn">Get in Touch</button>
        </Link>
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <Link to="/contact">
        <button className="btn desktop-btn">Get in Touch</button>
      </Link>
    </header>
  );
};

export default Navbar;
