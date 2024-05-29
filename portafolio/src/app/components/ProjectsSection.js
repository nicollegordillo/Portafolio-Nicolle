import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '40px', // Adjust the padding as needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <div id="projects" className="projects-section">
        
        <div className="cover">
         <h2>Proyectos</h2>
        </div>
        <div className="curve"></div>
        <div className="cards">
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
    </div>
  );
};

export default ProjectsSection;
