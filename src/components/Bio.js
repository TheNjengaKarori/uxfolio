// Bio.js
import React from 'react';
import '../App.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <h1>Hello, I'm Njenga.</h1>
      <h2>I use design to give companies an unfair advantage!</h2>
      <div className="line"></div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/njenga-karori-2b9bb6223/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="separator">  </span>
        <a href="https://twitter.com/NjengaKarori" target="_blank" rel="noopener noreferrer">X/Twitter</a>
        <span className="separator">  </span>
        <a href="https://www.behance.net/njengakarori" target="_blank" rel="noopener noreferrer">Behance</a>
      </div>
    </div>
  );
};

export default Bio;
