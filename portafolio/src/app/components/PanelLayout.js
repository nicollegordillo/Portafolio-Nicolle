import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import styles from '../styles/panel.css';
import AboutMeSection from './AboutMeSection';
import ProjectsSection from './ProjectsSection';
import ContactsSection from './ContactsSection';
import TechnologiesSection from './TechnologiesSection';
import {chibi} from '../images.js';

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
          <div className="subtitle">
            ニコル
          </div>
          <div className="title">
            Nicolle Gordillo
          </div>
          <div className="additional-text">
            {topText}
          </div>
          <div className="section-links">
            <button className="cover buttonAboutme" onClick={() => scrollToSection('about-me')}>Sobre mí</button>
            <button className="cover buttonTech" onClick={() => scrollToSection('technologies')}>
              <span className="buttonText">Tecnologías</span>
              <span className="buttonText"> y </span> 
              <span className="buttonText"> Lenguajes </span>
            </button>
            <button className="cover buttonCon" onClick={() => scrollToSection('contacts')}>Contactos!!!</button>
            <button className="cover buttonProy" onClick={() => scrollToSection('projects')}>Proyectos</button>
          </div>
        </div>
        <div className="main-content">
          <div className="aboutdiv">
            <AboutMeSection id="about-me"/>
            <div className="imagebox">
              <img src={chibi} alt="image" style={{ width: '50%', height: 'auto' }} />
            </div>
          </div>
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
