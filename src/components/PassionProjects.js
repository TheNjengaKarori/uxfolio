// PassionProjects.js
import React from 'react';
import '../App.css';

const PassionProjects = () => {
  return (
    <div className="passion-projects-container">
      <h1>passion projects.</h1>
      <p>Exploring creativity and innovation through exciting personal projects.</p>
      <div className="grid-container">
      <a href="https://uxideas.vercel.app/" target="_blank" rel="noopener noreferrer" className="grid-item">
        <img src={require('../res/uxideas.png')} alt="UI?UX Ideas" />
          <p className="description">This web app provides ui/ux ideas to designers.</p>
          <div className="label-box">
            <span className="label">Design inspiration</span>
            <span className="label">Design resources</span>
            <span className="label">Design ideas</span>
          </div>
        </a>
        <div className="grid-item">
          <img src={require('../res/uxideas.png')} alt="UI?UX Ideas" />
          <p className="description">This is a short description for Grid Two.</p>
          <div className="label-box">
            <span className="label">Label One</span>
            <span className="label">Label Two</span>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="social-links-container">
        <a href="https://www.linkedin.com/in/njenga-karori-2b9bb6223/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
        <span className="icon-spacing"></span> 
      
        <a href="https://twitter.com/NjengaKarori" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <span className="icon-spacing"></span> 
      
        <a href="https://www.behance.net/njengakarori" target="_blank" rel="noopener noreferrer" className="social-icon">
          <i className="fab fa-behance fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default PassionProjects;
