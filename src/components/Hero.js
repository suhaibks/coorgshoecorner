import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>Step Into the Future</h1>
        <p>Comfort. Style. Performance.</p>
        <a href="#products" className="cta-button">Explore</a>
      </div>
    </section>
  );
}

export default Hero;
