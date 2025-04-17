import React, { useState } from 'react';
import './about.css'; // Add custom styles for the About page

const About = () => {
  const [review, setReview] = useState({
    name: '',
    comment: '',
    rating: 5,
  });

  const [reviews, setReviews] = useState([
    {
      name: "Alice",
      comment: "Absolutely love this brand! The quality of the clothes is top-notch and the designs are amazing!",
      rating: 5,
    },
    {
      name: "John",
      comment: "Great fit and the fabrics are so comfortable. Highly recommend this brand!",
      rating: 4,
    },
    {
      name: "Emma",
      comment: "I love the eco-friendly materials they use! Stylish and sustainable.",
      rating: 5,
    },
  ]);

  const handleReviewChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, review]); // Add new review to the list
    setReview({
      name: '',
      comment: '',
      rating: 5,
    }); // Reset the form after submission
  };

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our clothing brand! We are a company dedicated to offering stylish, comfortable,
        and eco-friendly clothing for everyone. Our mission is to deliver high-quality fashion that
        makes you feel confident, while also being kind to the planet.
      </p>
      <p>
        We specialize in creating timeless pieces using sustainable fabrics and materials. From everyday wear to
        special occasion attire, we have something for everyone.
      </p>

      <h2>What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="rating">
                {"⭐".repeat(review.rating)} {/* Display stars based on rating */}
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleReviewSubmit} className="feedback-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={review.name}
          onChange={handleReviewChange}
          required
        />
        <textarea
          name="comment"
          placeholder="Your Feedback"
          value={review.comment}
          onChange={handleReviewChange}
          required
        />
        <select
          name="rating"
          value={review.rating}
          onChange={handleReviewChange}
          required
        >
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default About;
