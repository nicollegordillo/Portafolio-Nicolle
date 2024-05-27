import React from 'react';

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-card">
        <a href="https://github.com/your-project-url" target="_blank" rel="noopener noreferrer">
          <img src="project-image.jpg" alt="Project Name" />
          <h3>Project Name</h3>
          <p>A brief description of the project.</p>
        </a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
};

export default ProjectsSection;
