import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { AboutStyle, NameStyle} from './styles.js';
import perfil from '../images/perfil.jpeg';
// import folder from '../images/folder.JPG';

function About() {
  return (
    <div>
      <Header />
      <NameStyle>
        <h1 class="mb-10">Mariana Saraiva</h1>
        <p>Software Developer | Trybe</p>
        <button
          class="border-solid border-2 bg-rose-700 text-white mt-10 p-2 rounded-lg"
          type="button"
        >
          Find out more
        </button>
      </NameStyle>
      <AboutStyle>
        <img 
          width="250px" 
          class="h-15 w-15 rounded-full ml-10"
          src={ perfil }
          alt="Foto de Perfil"
        />
        <div class="shadow-lg bg-white p-8 m-10 rounded-lg">
          <h2 class="text-2xl pb-10 text-rose-700">About me</h2>
          <div class="shadow-lg ">
            <p>
              I'm shy and talk a lot, it seems contradictory but it's exactly like that. With these characteristics I worked for years in the hospital area, learning to have resilience, a sense of urgency and to work as a team. And it was when I needed to transform the paper records to the system that I found myself in love with Technology. The teenager who had taken the entrance exam for computational mathematics came along and took care of me. Today I am a student of Web Development at Trybe.
            </p>
          </div>
        </div>
      </AboutStyle>
      <Footer />
    </div>

  );
}

export default About;
