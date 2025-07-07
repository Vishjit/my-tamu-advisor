import React from 'react';
import './Navbar.css';
import logoImage from '../assets/logo.png'; // adjust path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Logo" className="logo-img" />

        <div className="logo-text">
          <a href="/" className="logo">Aggie Assistant</a>
          <p className="subtitle">Texas A&M Virtual Counselor</p>
        </div>
      </div>

      <div className="navbar-right">
        <div className="right-text">
          <p className="status">Available 24/7</p>
          <p className="subtitle">Gig'em Aggies</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
