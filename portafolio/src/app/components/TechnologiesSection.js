import React from 'react';
import {c,java,javas,kotlin,python,html,css,react,node,next,mysql,postgres,oracle} from '../images';

const TechnologiesSection = ({id}) => {
  return (
    <div id={id} className="cover technologies-section">
      <h2>Tecnologías y Lenguajes</h2>
      <div className="sections-container">
        <div className="section">
          <h3>Programming Languages</h3>
          <div className="icons">
            <a href="https://dotnet.microsoft.com/es-es/languages/csharp"><img src={c} alt="c#" style={{width:'8em', height:'auto'}}/></a>
            <a href="https://www.java.com/es/"><img src={java} alt="java" style={{ width: '5em', height: 'auto' }}/></a>
            <a href="https://kotlinlang.org/"><img src={kotlin} alt="kotlin"  style={{ width: '8em', height: 'auto' }}/></a>
            <a href="https://www.python.org/"><img src={python} alt="python"  style={{ width: '5em', height: 'auto' }}/></a>
          </div>
        </div>
        <div className="section">
          <h3>Databases</h3>
          <div className="icons">
            <a href="https://www.mysql.com/"><img src={mysql} alt="mysql"  style={{ width: '8em', height: 'auto' }}/></a>
            <a href="https://www.postgresql.org/"><img src={postgres} alt="postgresql"  style={{ width: '8em', height: 'auto' }}/></a>
            <a href="https://www.oracle.com/"><img src={oracle} alt="oracle"  style={{ width: '8em', height: 'auto' }}/></a>
          </div>
        </div>
        <div className="section">
          <h3>Web Development</h3>
          <div className="icons">
            <a href="https://developer.mozilla.org/es/docs/Web/HTML"><img src={html} alt="html"  style={{ width: '4em', height: 'auto' }}/></a>
            <a href="https://developer.mozilla.org/es/docs/Web/CSS"><img src={css} alt="css"  style={{ width: '4em', height: 'auto' }}/></a>
            <a href="https://www.javascript.com/"><img src={javas} alt="javascript"  style={{ width: '9em', height: 'auto' }}/></a>
            <a href="https://nextjs.org/"><img src={next} alt="next"  style={{ width: '5em', height: 'auto' }}/></a>
            <a href="https://nodejs.org/en"><img src={node} alt="node js"  style={{ width: '5em', height: 'auto' }}/></a>
            <a href="https://es.react.dev/"><img src={react} alt="react"  style={{ width: '10em', height: 'auto' }}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
