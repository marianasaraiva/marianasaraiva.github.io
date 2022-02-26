import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ProjectStyle, TechToolStyle, CardImageProject, FlexCenter } from './styles.js';
import Pixel from '../images/pixel.png';
import Trybewarts from '../images/trybewarts.png';
import ShoppingCart from '../images/shoppingCart.png';

import SolarSistem from '../images/solarSistem.png';
import Trivia from '../images/trivia.png';
import AppRecipe from '../images/appRecipe.png';

import TrybeWallet from '../images/trybeWallet.png';


function Projects() {
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
        <p>
          Colocar button para selecionar o projeto. Colocar um texto sobre os projetos e selecionar 6 projetos par vincular.
        </p>
        <FlexCenter>
          <CardImageProject>
            <h3>Projeto Pixel Arte</h3>
            <p>Projeto Individual</p>
            <p>HMTL, CSS</p>
            <img class="w-80 h-70 shadow-lg" src={ Pixel } alt="Project Pixel"/>
          </CardImageProject>
          <CardImageProject>
            <h3>Projeto Trybewarts</h3>
            <p>Projeto em dupla</p>
            <p>HMTL, CSS</p>
            <img class="w-80 h-70 shadow-lg" src={ Trybewarts } alt="Project Trybewarts"/>
          </CardImageProject>
          <CardImageProject>
            <h3>Projeto Carrinho de Compras</h3>
            <p>Projeto Individual</p> 
            <p>HMTL, CSS</p>
            <img class="w-80 h-70 shadow-lg" src={ ShoppingCart } alt="Project ShoppingCart"/>
          </CardImageProject>
        </FlexCenter>

        <FlexCenter>
          <CardImageProject>
            <h3>Projeto Solar System</h3>
            <p>Projeto individual</p>
            <p>React</p>
            <img class="w-80 h-70 shadow-lg" src={ SolarSistem } alt="Project SolarSistem "/>
          </CardImageProject>
          <CardImageProject>
            <h3>Projeto Trybe Wallet</h3>
            <p>Projeto individual</p>
            <p>React, Redux</p>
            <img class="w-80 h-70 shadow-lg" src={ TrybeWallet } alt="Project TrybeWallet "/>
          </CardImageProject>
          <CardImageProject>
            <h3>Projeto Perguntas e Respostas</h3>
            <p>Projeto em grupo</p>
            <p>React, Redux</p>
            <img class="w-80 h-70 shadow-lg" src={ Trivia } alt="Project Trivia"/>
          </CardImageProject>
        </FlexCenter>

        <FlexCenter>
          <CardImageProject>
            <h3>Projeto App Recipe</h3>
            <p>Projeto em grupo</p>
            <p>React, ContextAPI, Hooks</p>
            <img class="w-80 h-70 shadow-lg" src={ AppRecipe } alt="Project AppRecipe"/>
          </CardImageProject>
        </FlexCenter>
      </ProjectStyle>
      <Footer />
    </div>
  );
}

export default Projects;
