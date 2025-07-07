import React from 'react';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>&copy; 2025 CSC. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/suhaib-k-s-2ba6a8250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
      </div>
    </footer>
  );
}

export default Footer;
