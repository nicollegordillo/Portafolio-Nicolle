import React from 'react';

const TechnologiesSection = ({id}) => {
  return (
    <div id={id} className="technologies-section">
      <h2>Technologies & Languages</h2>
      <div className="section">
        <h3>Programming Languages</h3>
        <div className="icons">
          {/* Add programming language icons here with respective URLs */}
          <a href="/javascript"><img src="javascript-icon.png" alt="JavaScript" /></a>
          <a href="/python"><img src="python-icon.png" alt="Python" /></a>
          {/* Add more icons for programming languages as needed */}
        </div>
      </div>
      <div className="section">
        <h3>Databases</h3>
        <div className="icons">
          {/* Add database icons here with respective URLs */}
          <a href="/mongodb"><img src="mongodb-icon.png" alt="MongoDB" /></a>
          <a href="/mysql"><img src="mysql-icon.png" alt="MySQL" /></a>
          {/* Add more icons for databases as needed */}
        </div>
      </div>
      <div className="section">
        <h3>Web Development</h3>
        <div className="icons">
          {/* Add web development icons here with respective URLs */}
          <a href="/html"><img src="html-icon.png" alt="HTML" /></a>
          <a href="/css"><img src="css-icon.png" alt="CSS" /></a>
          {/* Add more icons for web development as needed */}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
