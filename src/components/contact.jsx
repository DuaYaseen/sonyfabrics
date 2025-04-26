import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the navigate hook

import './contact.css';  // Your CSS file
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
    
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Data submitted successfully!');
        alert('Thank you for contacting us!');
        setSubmitted(true);
  
        setTimeout(() => {
          navigate('/');
        }, 2000);  // 2 seconds delay
      } else {
        console.error('Failed to submit data');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error while submitting:', error);
      alert('Server error. Please try again later.');
    }
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
            <option value="Premium">Under 5000</option>
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
