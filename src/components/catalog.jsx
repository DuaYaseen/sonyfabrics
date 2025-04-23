import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './catalog.css';

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
        <div className="catalog-content">
          <div className="catalog-image-container">
            <img src={image} alt={title} className="catalog-image" />
          </div>

          <div className="catalog-details">
            <h2>{title}</h2>
            <p className="catalog-description">{description}</p>
            <p className="catalog-description">Price:  Will known after contact us. </p>

            <div className="catalog-buttons">
              <button className="close-btn" onClick={handleClose}>Close</button>
              <button className="contact-btn" onClick={handleContact}>Contact Us</button>
            </div>
          </div>
        </div>
      ) : (
        <p>No catalog selected.</p>
      )}
    </div>
  );
};

export default Catalog;
