import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { dataProjects, dataTechnologies } from '../services/dataProjects.js';
import { 
  // BackgroundImageStyle,
  BackgroundImageProject,
  TechContainer,
  Title,
  ProjectP,
  CardTech,
  ProjectStyle,
  ContainerInput,
  InputSearch,
  ButtonSearch,
  FlexCenter,
  CardImageProject,
  BlankLink,
  LinkButton,
  ImageProjects } from './styles.js';

function Projects() {
  const [inputState, setInputState] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <BackgroundImageProject>
        <Title id="techCard">Projetos</Title>
        <ProjectP>Lista dos projetos concluídos! Filtre pelo nome ou pela tecnologia desejada.</ProjectP>
          <InputSearch
            placeholder="Buscar por nome ou tecnologia"
            type="text"
            value={inputState}
            onChange={({ target }) => setInputState(target.value)}
          />
          <ButtonSearch
            type="button"
            onClick={() => { setSearch(inputState); setInputState('') }}
          >
            Pesquisar
          </ButtonSearch>
      </BackgroundImageProject>
      <ProjectStyle>
        {
          search.length === 0 ?
            <FlexCenter>
              {
                dataProjects.map((project, i) => (
                  <CardImageProject>
                    <ImageProjects src={project.image} alt={project.name} />
                    {/* <ProjectP>{project.name}</ProjectP> */}
                    <ProjectP>{project.description}</ProjectP>
                    <BlankLink>
                      <LinkButton>
                        <Link key={i} to={{ pathname: `${project.url}` }} target="_blank">GitHub</Link>
                      </LinkButton>
                      { project.deploy !== '' &&
                        <LinkButton>
                          <Link key={i} to={{ pathname: `${project.deploy}` }} target="_blank">Deploy</Link>
                        </LinkButton>
                      }
                    </BlankLink>
                  </CardImageProject>
                ))
              }
            </FlexCenter>
            :
            <FlexCenter>
              {
                dataProjects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()) || project.tecnologies.includes(search.toLowerCase()))
                  .map((proj, i) => (
                    <CardImageProject>
                      <ImageProjects src={proj.image} alt={proj.name} />
                      {/* <ProjectP>{proj.name}</ProjectP> */}
                      <ProjectP>{proj.description}</ProjectP>
                      <BlankLink>
                        <LinkButton>
                          <Link key={i} to={{ pathname: `${proj.url}` }} target="_blank">GitHub</Link> 
                        </LinkButton>
                        { proj.deploy !== '' &&
                          <LinkButton>
                            <Link key={i} to={{ pathname: `${proj.deploy}` }} target="_blank">Deploy</Link>
                          </LinkButton>
                        }
                    </BlankLink>
                    </CardImageProject>
                  ))}
            </FlexCenter>
        }
      </ProjectStyle>
      <BackgroundImageProject>
        <TechContainer>
          <Title>Tecnologias e Ferramentas</Title>
          <ProjectP>
            Lista das principais tecnologias desenvolvidas. Ao clicar em uma tecnologia, ocorre o filtro dos projetos que foram desenvolvidos utilizando ela.
          </ProjectP>
          <FlexCenter>
            {dataTechnologies.map((tech, i) => (
              <CardTech
                key={i}
                type="button"
                href="#techCard"
                onClick={() => setSearch(tech.name)}
              >
                <img
                  src={tech.image}
                  alt={tech.name}
                  width="70px"
                />
                <li>
                  {tech.name}
                </li>
              </CardTech>
            ))}
          </FlexCenter>
        </TechContainer>
      </BackgroundImageProject> 
      <Footer />
    </div>
  );
}

export default Projects;
