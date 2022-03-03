import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ContactStyle, SectionStyle, LocationStyle, LocationItemStyle } from './styles.js';
import Github from '../images/icon-github.png';
import Linkedin from '../images/icon-linkedin.png';

function Contact() {
  return (
    <div>
      <Header />
      <ContactStyle>
        <SectionStyle>
        <h2 className="mt-10 text-3xl text-rose-700 font-semibold">Find me here</h2>
          <p className="text-lg font-semibold">
            Where can you get in touch
          </p>
          <div className="p-4 flex items-center w-3/4 justify-evenly m-10 rounded-lg">
            <Link className="bg-white hover:bg-rose-900 rounded-full" to={{ pathname: "https://github.com/marianasaraiva" }} target="_blank">
              <img  clasName="text-rose-900" width="60" src={ Github } alt="icone do github"/> 
            </Link>
            <Link className="bg-white hover:bg-rose-900 rounded-full" to={{ pathname: "https://www.linkedin.com/in/marianascmoura/" }} target="_blank">
              <img  width="60" src={ Linkedin } alt="icone do linkedin"/>
            </Link>
          </div>
          
          <LocationStyle>
            <LocationItemStyle>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Localização</h3>
              <p className="text-center">
                Belo Horizonte
                <br></br>
                Minas Gerais
                <br></br>
                Brasil
              </p>
            </LocationItemStyle>

            <LocationItemStyle>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Envie um e-mail</h3>
              <p>marianascm8@gmail.com</p>
            </LocationItemStyle>
          </LocationStyle>
        </SectionStyle>
      </ContactStyle>
      <Footer />
    </div>
  );
}

export default Contact;
