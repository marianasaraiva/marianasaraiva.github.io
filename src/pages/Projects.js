import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ProjectStyle, TechToolStyle, CardImageProject, FlexCenter, ImageProjects } from './styles.js';
import { dataProjects } from '../services/dataProjects.js';

function Projects() {
  const [ inputState, setInputState ] = useState('');
  const array = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Jest', 'React', 'Redux', 'Docker', 'MySQL'];
  return (
    <div>
      <Header />
      <TechToolStyle>
        <ul class="size-l bg-rose-50 px-36 py-10 rounded-lg">
          <h2 class="pb-10 text-rose-700 text-2xl">Technology and Tools</h2>
          {array.map((tech) => (
            <li>
              {tech}
            </li>
          ))}
        </ul>
      </TechToolStyle>

      <ProjectStyle>
        <h2 class="mb-10 text-2xl text-rose-700">Projects</h2>
        <input
          class="border-2 text-center"
          placeholder="Search for tecnologies"
          type="text"
          onChange={ ({ target }) => setInputState(target.value) } 
        />
        
        {
          inputState.length === 0 ?
            <FlexCenter>
            {
              dataProjects.map((project) => (
                <CardImageProject>
                  <ImageProjects src={project.image} alt={project.name} />
                  <h3>{project.name}</h3>
                </CardImageProject>
              ))
            }
          </FlexCenter>
          : null
        }
        
      </ProjectStyle>
      <Footer />
    </div>
  );
}

export default Projects;
