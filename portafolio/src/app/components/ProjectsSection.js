import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {calc, blog, htmlfoto, cssfoto,js} from '../images';

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    //speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    //pauseOnHover: true,
    centerMode: false
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
            <a href="https://github.com/nicollegordillo/Lab-3-HTML-only" target="_blank" rel="noopener noreferrer">
              <img src={htmlfoto} alt="HTML" />
              <h3>Html story</h3>
              <p>Este proyecto es una historia creada utilizando solo html.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/nicollegordillo/Lab4CSS" target="_blank" rel="noopener noreferrer">
              <img src={cssfoto} alt="css" />
              <h3>Dibujo con CSS</h3>
              <p>En este proyecto se recreó una imagen utilizando CSS.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/nicollegordillo/Lab5JS" target="_blank" rel="noopener noreferrer">
              <img src={js} alt="js" />
              <h3>Chat con js</h3>
              <p>En este proyecto se creó el cliente de un chat, en javascript, que implementa una api.</p>
            </a>
          </div>
          <div className="project-card">
            <a href="https://github.com/nicollegordillo/Proyecto_blog" target="_blank" rel="noopener noreferrer">
              <img src={blog} alt="Blog" />
              <h3>Tamagotchi blog</h3>
              <p>Este proyecto es un blog que muestra publicaciones obtenidas a través de una API personalizada.</p>
            </a>
          </div>
           <div className="project-card">
            <a href="https://github.com/nicollegordillo/Lab7" target="_blank" rel="noopener noreferrer">
              <img src={calc} alt="Calculator" />
              <h3>Simple calculator</h3>
              <p>Este proyecto es una aplicación de calculadora simple desarrollada con Next.js. Incluye pruebas unitarias y storybook.</p>
            </a>
          </div>
        </Slider>
        </div>
    </div>
  );
};

export default ProjectsSection;
