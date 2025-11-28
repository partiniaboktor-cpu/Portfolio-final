import React, { useState } from "react";
import logo from "../images/mylogo.svg";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleBurger = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="nav-header">
      {/* LOGO */}
      <img src={logo} alt="logo" className="nav-logo" />

      {/* RIGHT SIDE: AR + BURGER */}
      <div className="right-section">
        <div className="lang-box">AR</div>

        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={toggleBurger}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      {/* SLIDE MENU */}
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About me</a></li>

          {/* DROPDOWN */}
          <li className="dropdown">
            <a className="dropdown-btn" onClick={toggleDropdown}>
              Categories ▼
            </a>

            <ul className={`dropdown-list ${dropdownOpen ? "open" : ""}`}>
              <li><a href="/UIprojects">UX/UI Designs</a></li>
              <li><a href="/GraphicProjects">Graphic Design</a></li>
              <li><a href="/Motionprojects">Motion Graphics</a></li>
              <li><a href="/Photographyprojects">Photography</a></li>
              <li><a href="/Webprojects">Programming</a></li>
            </ul>
          </li>

          <li><a href="/Article">Article</a></li>
          <li><a href="/Contactpage">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;




