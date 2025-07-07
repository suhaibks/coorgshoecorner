import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-text">
          <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p><strong>Address:</strong> Coorg Shoe Corner, Club Road, Somwarpet – 571236</p>
          <p>
            <strong>Location:</strong>{' '}
            <a
              href="https://www.google.com/maps?q=coorg+shoe+corner+somwarpet"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
