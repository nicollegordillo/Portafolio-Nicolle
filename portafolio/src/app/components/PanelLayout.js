import React from 'react';
import styles from '../styles/panel.css';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactsSection from './ContactsSection';
import TechnologiesSection from './TechnologiesSection';

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
          <AboutMeSection />
          <TechnologiesSection />
          <ProjectsSection />
          <ContactsSection />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
