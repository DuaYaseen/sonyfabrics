import React from 'react';
import './product.css';
import { useNavigate } from 'react-router-dom';

import catalog1 from '../assets/pictures/catalog 1.jpeg';
import catalog2 from '../assets/pictures/catalog 2.jpeg';
import catalog3 from '../assets/pictures/catalog 3.jpeg';

const products = [
  { title: 'Catalog One', description: 'High quality design', image: catalog1 },
  { title: 'Catalog Two', description: 'Modern and fast', image: catalog2 },
  { title: 'Catalog Three', description: 'Built for performance', image: catalog3 },
  { title: 'Catalog Four', description: 'Clean UI', image: catalog1 },
  { title: 'Catalog Five', description: 'Responsive layout', image: catalog2 },
  { title: 'Catalog Six', description: 'SEO optimized', image: catalog3 },
  { title: 'Catalog Seven', description: 'Modern animations', image: catalog1 },
  { title: 'Catalog Eight', description: 'Dark mode support', image: catalog2 },
  { title: 'Catalog Nine', description: 'React + Vite', image: catalog3 },
  { title: 'Catalog Ten', description: 'Best for portfolios', image: catalog1 },
  { title: 'Catalog Eleven', description: 'Fast performance', image: catalog2 },
  { title: 'Catalog Twelve', description: 'Slick and clean', image: catalog3 },
];

const Product = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    // Pass the catalog details to the Catalog page
    navigate(`/catalog/${encodeURIComponent(item.image)}?title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}`);
  };

  return (
    <section className="product-section">
      <h2 className="product-heading">Our Product Catalog</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div
  className="product-card"
  key={index}
  onClick={() => navigate('/catalog', {
    state: {
      image: item.image,
      title: item.title,
      description: item.description
    }
  })}
>
  <img src={item.image} alt={item.title} />
  <div className="card-content">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default Product;
