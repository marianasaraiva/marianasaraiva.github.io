import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  BackgroundImageStyle,
  Title,
  SectionStyle,
  // ContainerContacts,
  StyleP,
  Titleh3,
  ButtonSearch,
  LocationItemStyle,
  ContainerMidias,
  InputContact,
  TextAreaContact
} from './styles.js';
import emailjs from '@emailjs/browser';
import Github from '../images/icon-github.png';
import Linkedin from '../images/icon-linkedin.png';
import { init } from '@emailjs/browser';
init("4fmOJ1PUN_y6Tbl90");

function Contact() {
  const [sendName, setSendName] = useState('');
  const [sendMessage, setSendMessage] = useState('');

  (function () {
    emailjs.init("4fmOJ1PUN_y6Tbl90");
  })();

  const emailSendLibrary = (send) => {
    console.log(send);
    emailjs.send("service_prps49g", "template_5lphbeb", send)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  return (
    <div>
      <Header />
      <BackgroundImageStyle>
        <SectionStyle>
          <Title>Onde me encontrar?</Title>
          <ContainerMidias>
            <LocationItemStyle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <Titleh3>Envie um e-mail</Titleh3>
              <p>marianascm8@gmail.com</p>
            </LocationItemStyle>
              <Link className="opacity-60 hover:bg-orange-900 rounded-full m-8" to={{ pathname: "https://github.com/marianasaraiva" }} target="_blank">
                <img className="w-8 md:w-12 lg:w-18" src={Github} alt="icone do github" />
              </Link>
              <Link className="opacity-60 hover:bg-orange-900 rounded-full m-8" to={{ pathname: "https://www.linkedin.com/in/marianascmoura/" }} target="_blank">
                <img className="w-8 md:w-12 lg:w-18" src={Linkedin} alt="icone do linkedin" />
              </Link>
            <LocationItemStyle>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <Titleh3>Localização</Titleh3>
              <p>Belo Horizonte, MG. Brasil</p>
            </LocationItemStyle>
          </ContainerMidias>
          <StyleP>Gostou? Vamos conversar... Envie sua mensagem!</StyleP>

          <form
            className="text-center my-2 w-10/12 flex flex-col items-center justify-evenly"
            action="malito:marianascm8@gmail.com"
            method="post"
            encType="multipart/form-data"
          >
            <InputContact
              type="text"
              required
              placeholder="Seu nome"
              name="name"
              onChange={({ target }) => setSendName(target.value)}
              value={sendName}
            />
            <TextAreaContact
              type="text"
              required
              placeholder="Mensagem"
              name="notes"
              onChange={({ target }) => setSendMessage(target.value)}
              value={sendMessage}
            />
            <div>
              <ButtonSearch
                type="button"
                onClick={() => {
                  emailSendLibrary({ name: sendName, notes: sendMessage });
                  setSendName('');
                  setSendMessage('');
                }}
              >
                Enviar
              </ButtonSearch>
            </div>
          </form>
        </SectionStyle>
      </BackgroundImageStyle>
      <Footer />
    </div>
  );
}

export default Contact;
