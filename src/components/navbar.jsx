import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import sonyfab from './sonyfab logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={sonyfab} alt="Logo" className="logo" />
        </Link>
        <span className="brand-name">Sony Fabrics</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        {/* <li><Link to="/catalog">Catalog</Link></li> */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
