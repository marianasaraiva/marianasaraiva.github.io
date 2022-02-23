import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';
import HeaderStyle from './styles.js';

function Header() {
  return (
    <HeaderStyle>
      <Link to={'/'}>
        <p>About</p>
      </Link>
      <Link to={'/projects'}>
        <p>Projects</p>
      </Link>
      <Link to={'/contact'}>
        <p>Contact</p>
      </Link>
    </HeaderStyle>
  );
}

export default Header;
