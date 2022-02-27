import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, HeaderStyleP } from './styles.js';

function Header() {
  return (
    <HeaderStyle>
      <Link class="w-2/4 flex flex-wrap items-center justify-between hover:text-rose-500 duration-500" to={'/'}>Mariana Saraiva</Link>
      <HeaderStyleP>
        <Link class="hover:text-rose-500 duration-500" to={'/projects'}>Projects</Link>
        <Link class="hover:text-rose-500 duration-500" to={'/contact'}>Contact</Link>
      </HeaderStyleP>
    </HeaderStyle>
  );
}

export default Header;
