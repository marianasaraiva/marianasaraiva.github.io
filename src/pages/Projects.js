import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { dataProjects, dataTechnologies } from '../services/dataProjects.js';
import { 
  BackgroundImageStyle,
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
  ImageProjects } from './styles.js';

function Projects() {
  const [inputState, setInputState] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <BackgroundImageStyle>
        <TechContainer>
          <Title>Tecnologias e Ferramentas</Title>
          <ProjectP>
            Lista das principais tecnologias desenvolvidas. Ao selecionar uma tecnologia, ocorre o filtro dos projetos que foram desenvolvidos utilizando ela.
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
      </BackgroundImageStyle>

      <ProjectStyle>
        <Title id="techCard">
          Projetos</Title>
        <ProjectP>
          Projetos concluídos usando as tecnologias aprendidas durante o curso de Desenvolvimento Web.
        </ProjectP>
        <ContainerInput>
          <InputSearch
            placeholder="Buscar por nome ou tecnologia"
            type="text"
            value={inputState}
            onChange={({ target }) => setInputState(target.value)}
          ></InputSearch>
          <ButtonSearch
            type="button"
            onClick={() => { setSearch(inputState); setInputState('') }}
          >
            Pesquisar
          </ButtonSearch>
        </ContainerInput>

        {
          search.length === 0 ?
            <FlexCenter>
              {
                dataProjects.map((project, i) => (
                  <Link key={i} to={{ pathname: `${project.url}` }} target="_blank">
                    <CardImageProject
                      type="button"
                    >
                      <ImageProjects src={project.image} alt={project.name} />
                      <ProjectP>{project.name}</ProjectP>
                      <ProjectP>{project.description}</ProjectP>
                    </CardImageProject>
                  </Link>
                ))
              }
            </FlexCenter>
            :
            <FlexCenter>
              {
                dataProjects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()) || project.tecnologies.includes(search.toLowerCase()))
                  .map((proj, i) => (
                    <Link key={i} to={{ pathname: `${proj.url}` }} target="_blank">
                      <CardImageProject
                        type="button"
                      >
                        <ImageProjects src={proj.image} alt={proj.name} />
                        <ProjectP>{proj.name}</ProjectP>
                        <ProjectP>{proj.description}</ProjectP>
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
