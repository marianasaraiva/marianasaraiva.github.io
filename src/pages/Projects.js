import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { dataProjects, dataTechnologies } from '../services/dataProjects.js';
import { 
  ProjectStyle,
  TechToolStyle,
  TechContainer,
  Title,
  CardTech,
  CardImageProject,
  FlexCenter,
  ImageProjects } from './styles.js';

function Projects() {
  const [inputState, setInputState] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <TechToolStyle>
        <TechContainer>
          <Title>Technology and Tools</Title>
          <FlexCenter>
            {dataTechnologies.map((tech, i) => (
              <CardTech
                type="button"
                onClick={() => setSearch(tech.name)}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  width="100px"
                />
                <li>
                  {tech.name}
                </li>
              </CardTech>
            ))}
          </FlexCenter>
        </TechContainer>
      </TechToolStyle>

      <ProjectStyle>
        <Title>Projects</Title>
        <p>
          Projects completed using the technologies learned during the FullStack Developer training.</p>
        <div class="flex items-center w-2/4 justify-evenly">
          <input
            class="border-2 text-center py-2 rounded-lg"
            placeholder="Search for name or technology"
            type="text"
            onChange={({ target }) => setInputState(target.value)}
          />
          <button
            class="border-2 px-16 py-2 my-4 bg-rose-900 text-white rounded-lg hover:bg-green-900"
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
                  <Link to={{ pathname: `${project.url}` }} target="_blank">
                    <CardImageProject
                      className="hover:opacity-60"
                      type="button"
                    >
                      <ImageProjects src={project.image} alt={project.name} />
                      <h3>{project.name}</h3>
                    </CardImageProject>
                  </Link>
                ))
              }
            </FlexCenter>
            :
            <FlexCenter>
              {
                dataProjects.filter((project) => project.name.includes(search) || project.tecnologies.includes(search))
                  .map((proj) => (
                    <Link to={{ pathname: `${proj.url}` }} target="_blank">
                      <CardImageProject
                        className="hover:opacity-60"
                        type="button"
                      >
                        <ImageProjects src={proj.image} alt={proj.name} />

                        <h3>{proj.name}</h3>
                      </CardImageProject>
                    </Link>
                  ))}
            </FlexCenter>
        }
      </ProjectStyle>
      <Footer />
    </div>
  );
}

export default Projects;
