import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the navigate hook

import './contact.css';
import contactImg from '../assets/pictures/catalog 5.jpeg';  // Your contact image

const Contact = () => {
  const navigate = useNavigate();  // Initialize the navigate function
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
    pricing: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);  // Log form data in console
    alert('Thank you for contacting us!');  // Show alert
    setSubmitted(true);

    // After 2 seconds, redirect to home page
    setTimeout(() => {
      navigate('/');
    }, 2000);  // 2 seconds delay for redirection
  };

  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contactImg} alt="Contact Us" />
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contact"
            placeholder="Your Contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <select
            name="pricing"
            value={formData.pricing}
            onChange={handleChange}
            required
          >
            <option value="">Select Pricing</option>
            <option value="Basic">Under 3000</option>
            <option value="Standard">Under 4000</option>
            <option value="Premium">under 5000</option>
            <option value="Premium">Upto 5000</option>
          </select>

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <p className="thank-you">Thank you for contacting us!</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
