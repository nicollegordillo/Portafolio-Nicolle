import React from 'react';
import {email,link,github} from '../images';
const ContactsSection = () => {
  const showTooltip = (email) => {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerText = email;
    tooltip.style.display = 'block';
  };

  const hideTooltip = () => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
  };
  return (
    <div id="contacts" className="cover contacts-section">
      <h2>Contáctame</h2>
      <div className="contact-icons">
        <a
          href="mailto:nickygordillo912@gmail.com"
          onMouseOver={() => showTooltip('nickygordillo912@gmail.com')}
          onMouseOut={hideTooltip}
        >
          <img src={email} alt="Email" />
        </a>
        <div id="tooltip" style={{ display: 'none', position: 'absolute', backgroundColor: 'black', color: 'white', padding: '5px' }}></div>
        <a href="https://www.linkedin.com/in/nicolle-alexandra-gordillo-ram%C3%ADrez/" target="_blank" rel="noopener noreferrer"><img src={link} alt="LinkedIn" /></a>
        <a href="https://github.com/nicollegordillo" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
        {/* Add more contact icons as needed */}
      </div>
    </div>
  );
};

export default ContactsSection;
