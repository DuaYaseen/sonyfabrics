import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, title, description } = location.state || {};

  const handleClose = () => {
    navigate('/products');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="catalog-page">
      {image ? (
        <>
          <img src={image} alt={title} className="catalog-image" />
          <h2>{title}</h2>
          <p className="catalog-description">{description}</p>
          <p className="catalog-description">More details will known after contacting Us</p> 
          <div className="catalog-buttons">
            <button className="close-btn" onClick={handleClose}>Close</button>
            <button className="contact-btn" onClick={handleContact}>Contact Us</button>
          </div>
        </>
      ) : (
        <p>No catalog selected.</p>
      )}
    </div>
  );
};

export default Catalog;
