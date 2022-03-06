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
          <Span>S</Span>ou tímida e falo muito, parece contraditório mas é exatamente assim. Trabalhei durante anos na área hospitalar, aprendendo a ter resiliência, senso de urgência e a trabalhar em equipe. E foi quando precisei transformar os registros em papel para o sistema que me apaixonei pela Tecnologia. A adolescente que havia prestado vestibular para matemática computacional, surgiu e tomou conta de mim.
          </p>
          <p>
          Hoje sou estudante de Desenvolvimento Web na Trybe. Atualmente estou me aventurando nos desafios do Back-end, e reforçando os conhecimentos adquiridos no Front-end. Como dizem por aí, metade Dev! Sejam bem vindos! 
          </p>
        </ContainerAbout>
      </AboutStyle>
      <Footer />
    </div >

  );
}

export default Home;
