// About.js
import React from 'react';
import './About.css'; // Make sure to create an About.css file for styling
import placeholderImage from '../assets/img/Logo.png'; // Replace with the path to your image

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vitae eros eget tellus tristique bibendum. Donec rutrum sed sem quis
          venenatis. Proin viverra risus a eros volutpat tempor. In quis arcu
          et eros porta lobortis sit amet at lacus. Praesent nec orci facilisis,
          interdum nisi quis, condimentum nibh. Donec tempus, mauris a
          imperdiet auctor, magna nisl ultricies eros, in posuere risus dolor
          id orci.
        </p>
      </div>
      <div className="about-image">
        <img src={placeholderImage} alt="About" />
      </div>
    </div>
  );
};

export default About;
