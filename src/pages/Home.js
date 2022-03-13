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
        <img
          width="250px"
          className="rounded-full"
          src={perfil}
          alt="Foto de Perfil"
        />
        <ContainerAbout>
          <TitleAbout id="about">Sobre mim</TitleAbout>
          <p>
          <Span>E</Span>m uma dessas voltas que a vida dá, conheci o mundo da tecnologia e me apaixonei! Atualmente sou desenvolvedora Full Stack em formação pela Trybe. Concluído o módulo de Front-end, neste momento estou me aventurando nos desafios do Back-end, reforçando e aprimorando os conhecimentos adquiridos ao longo do curso. 
          </p>
          <p>
          Trabalhei durante anos na área hospitalar, aprendendo a ter resiliência, senso de urgência e a trabalhar em equipe.
          </p>
          <p>
          Como dizem por aí, hoje sou metade Dev!
          </p>
          <p>Sejam bem vindos!</p>
        </ContainerAbout>
      </AboutStyle>
      <Footer />
    </div >

  );
}

export default Home;
