import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <button className="menu-button" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </ul>
    </div>
  );
}
