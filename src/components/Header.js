import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, HeaderStyleP } from './styles.js';

function Header() {
  return (
    <HeaderStyle>
      <Link to={'/'}>Mariana Saraiva</Link>
      <HeaderStyleP>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/contact'}>Contact</Link>
      </HeaderStyleP>
    </HeaderStyle>
  );
}

export default Header;
