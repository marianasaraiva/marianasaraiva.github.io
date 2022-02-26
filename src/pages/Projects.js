import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Projects() {
  const array = [ 'HTML', 'CSS', 'JavaScript', 'GitHub', 'Jest', 'React', 'Redux', 'Docker', 'MySQL' ];
  return (
    <div>
      <Header />
      <section>
        <h2>Technology and Tools</h2>
        <ul>
          {array.map((tech) => (
            <li>
              {tech}
              {/* <img src={icon} alt="icon HTML"/> */}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <p>
          Colocar button para selecionar o projeto
          Colocar um texto sobre os projetos e selecionar 6 projetos par vincular. 
        </p>
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
