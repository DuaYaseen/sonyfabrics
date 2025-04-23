import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5000/api/login', user);

      alert(res.data.message);
    } catch (err) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={user.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={user.password}
          onChange={handleChange}
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
