import React from 'react';
import styles from '../styles/panel.css';

const PanelLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="panel">
        {children}
      </div>
    </div>
  );
};

export default PanelLayout;
