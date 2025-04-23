import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/sonyfab logo.jpg'; // ✅ Add your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>
        <span className="brand-name">Sony Fabrics</span>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
      </div>
      <div className="cart-link">
  <Link to="/cart" onClick={closeMenu}>🛒</Link>
</div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
