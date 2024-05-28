import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    
  };

  return (
    <div id="projects" className="projects-section">
      
        <h2>Projects</h2>
        <Slider {...settings}>
          <div className="project-card">
            <a href="https://github.com/your-project-url" target="_blank" rel="noopener noreferrer">
              <img src="project-image.jpg" alt="Project Name" />
              <h3>Project Name 1</h3>
              <p>A brief description of the project.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/your-project-url" target="_blank" rel="noopener noreferrer">
              <img src="project-image.jpg" alt="Project Name" />
              <h3>Project Name 2</h3>
              <p>A brief description of the project.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/your-project-url" target="_blank" rel="noopener noreferrer">
              <img src="project-image.jpg" alt="Project Name" />
              <h3>Project Name 3</h3>
              <p>A brief description of the project.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/your-project-url" target="_blank" rel="noopener noreferrer">
              <img src="project-image.jpg" alt="Project Name" />
              <h3>Project Name 4</h3>
              <p>A brief description of the project.</p>
            </a>
          </div>
          {/* Add more project cards as needed */}
        </Slider>
      
    </div>
  );
};

export default ProjectsSection;
