// Bio.js
import React from 'react';
import '../App.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <h1>bio.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="line"></div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/njenga-karori-2b9bb6223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="separator">  </span>
        <a href="https://twitter.com/NjengaKarori" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </div>
  );
};

export default Bio;
