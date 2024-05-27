import React from 'react';
import styles from '../styles/panel.css';

const PanelLayout = ({ header, topText, children }) => {
  return (
    <div className="container">
      <div className="panel">
        <div className="top-section">
          <div className="header">
            {header}
          </div>
          <div className="additional-text">
            {topText}
          </div>
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
