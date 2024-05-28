import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import styles from '../styles/panel.css';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactsSection from './ContactsSection';
import TechnologiesSection from './TechnologiesSection';

const PanelLayout = ({ header, topText, children }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
          <div className="section-links">
            <button onClick={() => scrollToSection('about-me')}>Sobre mí</button>
            <button onClick={() => scrollToSection('technologies')}>Tecnologías y Lenguajes</button>
            <button onClick={() => scrollToSection('contacts')}>Contactos</button>
            <button onClick={() => scrollToSection('projects')}>Proyectos</button>
          </div>
        </div>
        <div className="main-content">
          <AboutMeSection id="about-me"/>
          <TechnologiesSection id="technologies"/>
          <ProjectsSection id="projects"/>
          <ContactsSection id="contacts"/>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
