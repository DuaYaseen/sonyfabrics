import React from 'react';
import './product.css';
import { useNavigate } from 'react-router-dom';

import catalog1 from '../assets/pictures/catalog 25.jpeg';
import catalog2 from '../assets/pictures/catalog 24.jpeg';
import catalog3 from '../assets/pictures/catalog 23.jpeg';
import catalog4 from '../assets/pictures/catalog 22.jpeg';
import catalog5 from '../assets/pictures/catalog 21.jpeg';
import catalog6 from '../assets/pictures/catalog 20.jpeg';
import catalog7 from '../assets/pictures/catalog 19.jpeg';
import catalog8 from '../assets/pictures/catalog 18.jpeg';
import catalog9 from '../assets/pictures/catalog 17.jpeg';
import catalog10 from '../assets/pictures/catalog 16.jpeg';
import catalog11 from '../assets/pictures/catalog 15.jpeg';
import catalog12 from '../assets/pictures/catalog 14.jpeg';
import catalog13 from '../assets/pictures/catalog 13.jpeg';
import catalog14 from '../assets/pictures/catalog 12.jpeg';
import catalog15 from '../assets/pictures/catalog 11.jpeg';
import catalog16 from '../assets/pictures/catalog 10.jpeg';
import catalog17 from '../assets/pictures/catalog 9.jpeg';
import catalog18 from '../assets/pictures/catalog 8.jpeg';


const products = [
  { title: 'Catalog One', description: 'High quality design', image: catalog1 },
  { title: 'Catalog Two', description: 'Modern and fast', image: catalog2 },
  { title: 'Catalog Three', description: 'Built for performance', image: catalog3 },
  { title: 'Catalog Four', description: 'Clean UI', image: catalog4 },
  { title: 'Catalog Five', description: 'Responsive layout', image: catalog5 },
  { title: 'Catalog Six', description: 'SEO optimized', image: catalog6 },
  { title: 'Catalog Seven', description: 'Modern animations', image: catalog7 },
  { title: 'Catalog Eight', description: 'Dark mode support', image: catalog8 },
  { title: 'Catalog Nine', description: 'React + Vite', image: catalog9 },
  { title: 'Catalog Ten', description: 'Best for portfolios', image: catalog10 },
  { title: 'Catalog Eleven', description: 'Fast performance', image: catalog11 },
  { title: 'Catalog Twelve', description: 'Slick and clean', image: catalog12 },
  { title: 'Catalog Thirteen', description: 'High quality design', image: catalog13 },
  { title: 'Catalog Fourteen', description: 'Modern and fast', image: catalog14 },
  { title: 'Catalog Fifteen', description: 'Built for performance', image: catalog15 },
  { title: 'Catalog Sixteen', description: 'Clean UI', image: catalog16 },
  { title: 'Catalog Seventeen', description: 'Responsive layout', image: catalog17 },
  { title: 'Catalog Eighteen', description: 'SEO optimized', image: catalog18 },
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
