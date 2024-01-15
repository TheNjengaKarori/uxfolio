// Logo.js
import React, { useState, useEffect } from 'react';
import logo1 from '../res/logo1.png';
import logo2 from '../res/logo2.png';
import logo3 from '../res/logo3.png'; 
import logo4 from '../res/logo4.png'; 
import logo5 from '../res/logo5.png'; 
import logo6 from '../res/logo6.png'; 
import '../App.css';

const Logo = () => {
  const [logoIndex, setLogoIndex] = useState(0);
  const logos = [logo1, logo2, logo3, logo4,logo5, logo6]; // Replace with your actual image paths

  useEffect(() => {
    // Set interval to change logo every 5 seconds (adjust as needed)
    const interval = setInterval(() => {
      setLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-container">
       <img src={logos[logoIndex]} alt={`Logo ${logoIndex + 1}`} />
      <div className="logo-text">
        <h1>Njenga Karori</h1>
        <h2>UI/UX Designer</h2>
      </div>
    </div>
  );
};

export default Logo;



