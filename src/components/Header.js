import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, HeaderStyleP } from './styles.js';
import Github from '../images/icon-github.png';
import Linkedin from '../images/icon-linkedin.png';

function Header() {
  return (
    <HeaderStyle>
      <Link className="lg:w-2/4 w-full flex flex-wrap items-center p-2 justify-center md:justify-between hover:text-orange-900 duration-500" to={'/'}>Mariana Saraiva</Link>
      <HeaderStyleP>
        <Link className="hover:text-orange-800 duration-500 p-2" to={'/projects'}>Projetos</Link>
        <Link className="hover:text-orange-800 duration-500 p-2" to={'/contact'}>Contatos</Link>
        <Link className="hover:bg-orange-800 rounded-full duration-500 sx:invisible md:visible" to={{ pathname: "https://github.com/marianasaraiva" }} target="_blank">
          <img className="w-10 lg:w-18" src={Github} alt="icone do github" />
        </Link>
        <Link className="hover:bg-orange-800 rounded-full duration-500 sx:invisible md:visible" to={{ pathname: "https://www.linkedin.com/in/marianascmoura/" }} target="_blank">
          <img className="w-10 lg:w-18" src={Linkedin} alt="icone do linkedin" />
        </Link>
      </HeaderStyleP>
    </HeaderStyle>
  );
}

export default Header;
