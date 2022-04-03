import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  AboutStyle,
  BackgroundImageStyle,
  TitleHome,
  Span,
  PHome,
  AboutHome,
  ContainerAbout,
  ImageAbout,
  TitleAbout } from './styles.js';
import perfil from '../images/perfil.jpeg';

function Home() {
  return (
    <div>
      <Header />
      <BackgroundImageStyle>
        <TitleHome>Mariana Saraiva</TitleHome>
        <PHome>Software Developer | Trybe</PHome>
        <AboutHome
          href="#about"
        >
          Descubra mais
        </AboutHome>

      </BackgroundImageStyle>
      <AboutStyle>
        <ImageAbout
          src={perfil}
          alt="Foto de Perfil"
        />
        <ContainerAbout>
          <TitleAbout id="about">Sobre mim</TitleAbout>
          <p>
          <p>
          <Span>S</Span>ou mineira, intensa e adoro viajar! Mas o que faz a diferença no meu dia a dia, é estar em contato com a natureza... contemplar o nascer do sol, ou apenas apreciar suas maravilhas!
          </p>
          <Span>E</Span>m uma dessas voltas que a vida dá, conheci o mundo da tecnologia e me apaixonei! Atualmente sou desenvolvedora Full Stack em formação pela Trybe. Concluído o módulo de Front-end, neste momento estou me aventurando nos desafios do Back-end, reforçando e aprimorando os conhecimentos adquiridos ao longo do curso. 
          </p>
          <p>
          <Span>D</Span>urante minha trajetória como Nutricionista, aprendi a ter resiliência, foco em resultados, senso de urgência e a trabalhar em equipe.
          </p>
        </ContainerAbout>
      </AboutStyle>
      <Footer />
    </div >

  );
}

export default Home;
