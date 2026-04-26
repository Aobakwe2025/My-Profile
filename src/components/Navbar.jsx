import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Aobakwe Modillane</div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li>
          <a
            href="/assets/Aobakwe_Modillane_CV.pdf"
            download="Aobakwe_Modillane_CV.pdf"
            className="resume-btn"
            onClick={() => setMenuOpen(false)}
          >
            Resume ↓
          </a>
        </li>
      </ul>

      <div className="social-icons">
        <a href="https://github.com/Aobakwe2025" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aobakwe-modillane-954b052a5"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/oky_abk" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
