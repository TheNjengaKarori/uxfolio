// Logo.js
import React from 'react';
import logoImage from '../res/group.png'; // Adjust the path accordingly
import '../App.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" />
      <div className="logo-text">
        <h1>Njenga Karori</h1>
        <h2>UI/UX Designer</h2>
      </div>
    </div>
  );
};

export default Logo;



