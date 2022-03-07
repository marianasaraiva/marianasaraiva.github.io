import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { dataProjects, dataTechnologies } from '../services/dataProjects.js';
import { 
  BackgroundImageStyle,
  TechContainer,
  Title,
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
          <FlexCenter>
            {dataTechnologies.map((tech, i) => (
              <CardTech
                key={i}
                type="button"
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
        <Title>Projetos</Title>
        <p>
        Projetos concluídos usando as tecnologias aprendidas durante o curso de Desenvolvimento Web.</p>
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
                  .map((proj, i) => (
                    <Link key={i} to={{ pathname: `${proj.url}` }} target="_blank">
                      <CardImageProject
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
