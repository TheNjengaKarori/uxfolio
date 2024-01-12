// Bio.js
import React from 'react';
import '../App.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <h1>bio.</h1>
      <p>
      I'm a UX/UI and Product Designer with 3 years of experience in creating and scaling user-centric designs. I'm passionate about blending innovative design with strategic user research to deliver exceptional user experiences.     </p>
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
