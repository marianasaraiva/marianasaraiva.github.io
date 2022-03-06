import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  AboutStyle,
  BackgroundImageStyle,
  TitleHome,
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
          Find out more
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
          <TitleAbout id="about">About me</TitleAbout>
          <p>
            I'm shy and talk a lot, it seems contradictory but it's exactly like that. With these characteristics I worked for years in the hospital area, learning to have resilience, a sense of urgency and to work as a team. And it was when I needed to transform the paper records to the system that I found myself in love with Technology. The teenager who had taken the entrance exam for computational mathematics came along and took care of me. Today I am a student of Web Development at Trybe.
          </p>
        </ContainerAbout>
      </AboutStyle>
      <Footer />
    </div >

  );
}

export default Home;
