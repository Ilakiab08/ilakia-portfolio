
import React from 'react';
import { Link } from 'react-scroll';

import './header.css';

const Header = () => {
  

  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Tami<span>zh</span> ila<span>kia</span></h1>
      </div>
      <div className='header-right'>
        <Link to="about" smooth={true} duration={500}>
          <h4>{('about')}</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>{('skills')}</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>{('projects')}</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>{('contact')}</h4>
        </Link>
        <h4 className="header-rightbutton">{('connect')}</h4>
      </div>
    </div>
  );
}

export default Header;
