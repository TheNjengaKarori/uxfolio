// Experience.js
import React from 'react';
import '../App.css';

const Experience = () => {
  return (
    <div className="experience-container">
      <h1>experience.</h1>
      <div className="experience-details">
        <p><strong>2021 - Current</strong></p>
        <p><strong>UI/UX Designer</strong> @ Company A</p>
        <div className="experience-line"></div>
        <div className="experience-row">
          <p>Download Resume</p>
          <i className="fas fa-download"></i>
          <div className="experience-space"></div>
          <p>Get in touch</p>
          <i className="far fa-envelope"></i>
          <div className="experience-more-space"></div> 
          <p><strong>Available for remote</strong></p>
          <div className="experience-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
