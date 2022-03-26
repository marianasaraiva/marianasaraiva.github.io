import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, HeaderStyleP } from './styles.js';
import Github from '../images/icon-github.png';
import Linkedin from '../images/icon-linkedin.png';

function Header() {
  return (
    <HeaderStyle>
      <Link className="w-2/4 flex flex-wrap items-center justify-between hover:text-rose-600 duration-500" to={'/'}>Mariana Saraiva</Link>
      <HeaderStyleP>
        <Link className="hover:text-rose-600 duration-500" to={'/projects'}>Projetos</Link>
        <Link className="hover:text-rose-600 duration-500" to={'/contact'}>Contato</Link>
        <Link className="bg-white hover:bg-rose-600 rounded-full duration-500" to={{ pathname: "https://github.com/marianasaraiva" }} target="_blank">
          <img width="40" src={Github} alt="icone do github duration-500" />
        </Link>
        <Link className="bg-white hover:bg-rose-600 rounded-full" to={{ pathname: "https://www.linkedin.com/in/marianascmoura/" }} target="_blank">
          <img width="40" src={Linkedin} alt="icone do linkedin" />
        </Link>
      </HeaderStyleP>
    </HeaderStyle>
  );
}

export default Header;
