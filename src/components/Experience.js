// Experience.js
import React from 'react';
import '../App.css';

const Experience = () => {

  return (
    <div className="experience-container">
      <h1>experience.</h1>
      <div className="experience-details">
        <p className="experience-dates">feb 2020 - Current</p>
        <p className="experience-title">UI/UX Designer @ Devient</p>
        <div className="experience-details-space"></div>
        <p className="experience-dates">sep 2022 - oct 2023</p>
        <p className="experience-title">UI/UX Designer @ Xtranet communications Ltd</p>
        <div className="experience-details-space"></div>
        <p className="experience-dates">oct 2022 - sep 2023</p>
        <p className="experience-title">UI/UX Designer @ Uamuzi</p>
        <div className="experience-details-space"></div>
        <p className="experience-dates">feb 2023 - sep 2023</p>
        <p className="experience-title">UI Designer @ Fuelytic </p>
        <div className="experience-details-space"></div>
        <p className="experience-dates">mar 2023 - apr 2023</p>
        <p className="experience-title">UI Designer @ Tizisha</p>
        <div className="experience-details-space"></div>
        <p className="experience-dates">mar 2022 - jun 2022</p>
        <p className="experience-title">
          Frontend Developer and UI/Ux Designer @ Swiftride
        </p>

        <div className="experience-line"></div>
        <div className="experience-row">
          <a href="#" className="experience-link" title="Download Resume">Download Resume
          <i class="material-icons-outlined">file_download</i>
          </a>
          
          <div className="experience-space"></div>
          <a href="#" className="experience-link" title="Get in Touch">Get in Touch
          <i class="material-icons-outlined">email</i>
          </a>
          
          <div className="experience-more-space"></div>
          <p className="experience-remote"><strong>Available for remote</strong> <div className="experience-pulse"></div></p>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
