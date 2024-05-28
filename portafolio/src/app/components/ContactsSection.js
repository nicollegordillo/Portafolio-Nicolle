import React from 'react';

const ContactsSection = () => {
  return (
    <div id="contacts" className="contacts-section">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="mailto:your-email@example.com"><img src="email-icon.png" alt="Email" /></a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer"><img src="github-icon.png" alt="GitHub" /></a>
        {/* Add more contact icons as needed */}
      </div>
    </div>
  );
};

export default ContactsSection;
