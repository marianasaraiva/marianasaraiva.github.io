import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <Link to={'/'}>
        <p>About</p>
      </Link>
      <Link to={'/projects'}>
        <p>Projects</p>
      </Link>
      <Link to={'/contact'}>
        <p>Contact</p>
      </Link>
    </div>
  );
}

export default Header;
