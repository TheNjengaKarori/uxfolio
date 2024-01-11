// PassionProjects.js
import React from 'react';
import '../App.css';

const PassionProjects = () => {
  return (
    <div className="passion-projects-container">
      <h1>passion projects.</h1>
      <p>Exploring creativity and innovation through exciting personal projects.</p>
      <div className="line"></div>
      <div className="social-links-container">
        <a href="https://www.linkedin.com/in/njenga-karori-2b9bb6223/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <span className="icon-spacing"></span> 
      
        <a href="https://twitter.com/NjengaKarori" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default PassionProjects;
