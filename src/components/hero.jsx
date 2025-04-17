import React from 'react';
import Slider from 'react-slick';
import { Link } from "react-router-dom";

import './hero.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import catalog1 from '../assets/pictures/catalog 1.jpeg';
import catalog2 from '../assets/pictures/catalog 2.jpeg';
import catalog3 from '../assets/pictures/catalog 3.jpeg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      title: 'Unstitched Collection',
      description: 'Explore more collections.',
      image: catalog1,
    },
    {
        title: 'Unstitched Collection',
        description: 'Explore more collections.',
      image: catalog2,
    },
    {
        title: 'Unstitched Collection',
        description: 'Explore more collections.',
      image: catalog3,
    },
  ];

  return (
    <section className="hero-carousel">
      <Slider {...settings}>
      {slides.map((slide, index) => (
  <div className="hero-slide" key={index}>
    <img src={slide.image} alt={slide.title} className="hero-image" />
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>{slide.title}</h1>
        <p>{slide.description}</p>
        <Link to="/products" className="hero-btn">Get Started</Link>

        </div>
    </div>
  </div>
))}

      </Slider>
    </section>
  );
};

export default Hero;


