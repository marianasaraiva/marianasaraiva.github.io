import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ProjectStyle, TechToolStyle, CardImageProject, FlexCenter, ImageProjects } from './styles.js';
import { dataProjects } from '../services/dataProjects.js';

function Projects() {
  const [inputState, setInputState] = useState('');
  const [search, setSearch] = useState('');
  const array = ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Jest', 'React', 'Redux', 'Docker', 'MySQL'];

  return (
    <div>
      <Header />
      <TechToolStyle>
        <ul class="size-l bg-rose-50 px-36 rounded-lg w-2/3 py-10">
          <h2 class="pb-10 text-2xl font-semibold">Technology and Tools</h2>
          {array.map((tech, i) => (
            <button
              type="button"
              onClick={() => setSearch(tech)}
            >
              <li class="flex w-16 items-center justify-evenly bg-rose-900 rounded-lg text-white px-16 py-2 m-4">
                {tech}
              </li>
            </button>
          ))}
        </ul>
      </TechToolStyle>

      <ProjectStyle>
        <h2 class="mb-10 text-2xl text-rose-900 font-semibold">Projects</h2>
        <p>
          Projects completed using the technologies learned during the FullStack Developer training.</p>
        <div class="flex items-center w-2/4 justify-evenly">
          <input
            class="border-2 text-center py-2 rounded-lg"
            placeholder="Search for name"
            type="text"
            onChange={({ target }) => setInputState(target.value)}
          />
          <button
            class="border-2 px-16 py-2 my-4 bg-rose-900 text-white rounded-lg"
            type="button"
            onClick={() => setSearch(inputState)}
          >
            Search
          </button>
        </div>

        {
          search.length === 0 ?
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
            :
            <FlexCenter>
              {
                dataProjects.filter((project) => project.name.includes(search) || project.tecnologies[0].includes(search))
                  .map((proj) => (
                    <CardImageProject>
                      <ImageProjects src={proj.image} alt={proj.name} />
                      <h3>{proj.name}</h3>
                    </CardImageProject>
                  ))}
            </FlexCenter>
        }
      </ProjectStyle>
      <Footer />
    </div>
  );
}

export default Projects;
