import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, HeaderStyleP } from './styles.js';

function Header() {
  return (
    <HeaderStyle>
      <Link className="w-2/4 flex flex-wrap items-center justify-between hover:text-rose-500 duration-500" to={'/'}>Mariana Saraiva</Link>
      <HeaderStyleP>
        <Link className="hover:text-rose-500 duration-500" to={'/projects'}>Projetos</Link>
        <Link className="hover:text-rose-500 duration-500" to={'/contact'}>Contato</Link>
      </HeaderStyleP>
    </HeaderStyle>
  );
}

export default Header;
