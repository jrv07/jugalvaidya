// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Jugal Vaidya. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jugal-vaidya-b51a68230/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/jrv07" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://x.com/vaidya_jugal" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;