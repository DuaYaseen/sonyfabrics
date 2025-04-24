import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './catalog.css';

const Catalog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    images = [],
    title,
    description,
    price,
    collection,
    style,
    fabric
  } = location.state || {};
  
  const [mainImage, setMainImage] = useState(images[0]);

  const handleClose = () => navigate('/products');
  const handleContact = () => navigate('/contact');
  const handleAddToCart = () => console.log('Added to Cart:', { images, title, description });

  return (
    <div className="catalog-page">
      {images.length ? (
        <div className="catalog-wrapper">
          <div className="catalog-image-preview">
            <img src={mainImage} alt={title} className="main-catalog-image" />

            <div className="thumbnail-row">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`thumbnail ${mainImage === img ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="catalog-details">
            {/* <h2>{title}</h2>
            <p className="catalog-price">PKR 9,990.00</p> */}
            {/* <p className="catalog-installments">Pay in 3 installments of PKR 3,330.00</p>

            <div className="catalog-sizes">
              <button>XS</button><button>S</button><button>M</button><button>L</button><button>XL</button>
            </div> */}
{/* 
            <button className="add-to-bag-btn" onClick={handleAddToCart}>ADD TO BAG</button> */}

<h2>{title}</h2>
<p className="catalog-price">{price}</p>

<div className="catalog-description-box">
  <p><strong>Collection:</strong> {collection}</p>
  <p><strong>Style:</strong> {style}</p>
  <p><strong>Fabric:</strong> {fabric}</p>
  <p>{description}</p>
</div>


            <div className="catalog-buttons">
              <button onClick={handleContact}>Contact Us</button>
              <button onClick={handleClose}>Back to Products</button>
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
