// File: src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';  // Custom CSS for the navbar

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/logow.png" alt="Edwin's Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Nav Links */}
            <li className="nav-item" style={{ marginLeft: '50%' }}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Me</Link>
            </li>
            {/* Social Media Icons */}
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/EdwinP503" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/edwin-polanco/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

