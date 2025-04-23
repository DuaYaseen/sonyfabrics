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

  const handleAddToCart = () => {
    console.log('Added to Cart:', { image, title, description });
    navigate('/cart', {
      state: { image, title, description }
    });
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
            <p className="catalog-description">More details will be known after contacting us.</p>

            <div className="catalog-buttons">
              <button className="close-btn" onClick={handleClose}>Close</button>
              <button className="contact-btn" onClick={handleContact}>Contact Us</button>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart 🛒</button>
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
