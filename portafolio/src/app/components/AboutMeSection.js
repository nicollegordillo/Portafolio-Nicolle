import React from 'react';
import {interest, school} from '../images';

const AboutMeSection = () => {
  return (
    <div id="about-me" className="cover about-me-section speech-bubble">
      <h2 style={{fontsize: '4em'}} >Sobre mí</h2>
      <div className="imagebox">
        <img src={school} alt="image" style={{ width: '5%', height: 'auto' }} />
      </div>
      <p style={{fontsize: '4em'}}>
        Hola!! Soy Nicolle Gordillo. Actualmente estudio Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle de Guatemala. También tengo un Bachillerato en Ciencias y Letras con orientación en Computación.
      </p>
      <div className="imagebox">
        <img src={interest} alt="image" style={{ width: '5%', height: 'auto' }} />
      </div>
      <p>
        Más allá de mis actividades académicas, Me apasiona la tecnología, los videojuegos y el manga. Hablo inglés fluido y japonés intermedio.
      </p>
    </div>
  );
};

export default AboutMeSection;
