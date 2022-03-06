import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  BackgroundImageStyle,
  Title,
  SectionStyle,
  ContainerContacts,
  StyleP,
  Titleh3,
  LocationItemStyle
} from './styles.js';
import Github from '../images/icon-github.png';
import Linkedin from '../images/icon-linkedin.png';

function Contact() {
  return (
    <div>
      <Header />
      <BackgroundImageStyle>
        <SectionStyle>
          <Title>Onde me encontrar?</Title>
          <StyleP>Gostou? Conheça um pouco mais e vamos conversar.</StyleP>

          <ContainerContacts>
            <LocationItemStyle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <Titleh3>Envie um e-mail</Titleh3>
              <p>marianascm8@gmail.com</p>
            </LocationItemStyle>
            <Link className="bg-white hover:bg-rose-900 rounded-full" to={{ pathname: "https://github.com/marianasaraiva" }} target="_blank">
              <img width="60" src={Github} alt="icone do github" />
            </Link>
            <Link className="bg-white hover:bg-rose-900 rounded-full" to={{ pathname: "https://www.linkedin.com/in/marianascmoura/" }} target="_blank">
              <img width="60" src={Linkedin} alt="icone do linkedin" />
            </Link>
            <LocationItemStyle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <Titleh3>Localização</Titleh3>
              <p>Belo Horizonte, MG. Brasil</p>
            </LocationItemStyle>
          </ContainerContacts>

        </SectionStyle>
      </BackgroundImageStyle>
      <Footer />
    </div>
  );
}

export default Contact;
