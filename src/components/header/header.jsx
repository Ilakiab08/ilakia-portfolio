
import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className='header'>
      <div className='header-left'>
        <h1>Tami<span>zh</span> ila<span>kia</span></h1>
      </div>
      <div className='header-right'>
        <Link to="about" smooth={true} duration={500}>
          <h4>{t('about')}</h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <h4>{t('skills')}</h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          <h4>{t('projects')}</h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <h4>{t('contact')}</h4>
        </Link>
        <h4 className="header-rightbutton">{t('connect')}</h4>
      </div>
    </div>
  );
}

export default Header;
