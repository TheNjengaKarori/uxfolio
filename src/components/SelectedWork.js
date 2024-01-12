import React from 'react';
import '../App.css';

const SelectedWork = () => {
  return (
    <div className="selected-work-container">
      <h1>selected work.</h1>
      <div className="grid-container">
        <div className="grid-item">
          <img src="path/to/your/image1.jpg" alt="Grid One Image" />
          <p className="description">This is a short description for Grid One.</p>
          <div className="label-box">
            <span className="label">Label One</span>
            <span className="label">Label Two</span>
          </div>
        </div>
        <div className="grid-item">
          <img src="path/to/your/image2.jpg" alt="Grid Two Image" />
          <p className="description">This is a short description for Grid Two.</p>
          <div className="label-box">
            <span className="label">Label One</span>
            <span className="label">Label Two</span>
          </div>
        </div>
        {/* Add additional grid items as needed */}
      </div>
    </div>
  );
};

export default SelectedWork;
