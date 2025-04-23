import React from 'react';
import './footer.css'; // You can style it here

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Sony Fabrics. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/sony.fabrics/profilecard/?igsh=c3Bzd2I2aDZweHhm" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram">Instagram</i>
          </a>
          <a href="https://www.facebook.com/share/16TwKt7UqH/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook">Facebook</i>
          </a>
          <a href="https://chat.whatsapp.com/GpIuSWDkVzrEOJE2MRP9zy" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp">Whatsapp</i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
