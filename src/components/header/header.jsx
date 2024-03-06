import React from 'react'
import { Link } from 'react-scroll';
import './header.css';
const header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Tami<span>zh</span> ila<span>kia</span></h1>
        </div>
        <div className='header-right'>
  <Link to="about" smooth={true} duration={500}>
    <h4>About me</h4>
  </Link>
  <Link to="skills" smooth={true} duration={500}>
    <h4>Skills</h4>
  </Link>
  <Link to="projects" smooth={true} duration={500}>
    <h4>Projects</h4>
  </Link>
 {/*  <Link to="experience" smooth={true} duration={500}>
    <h4>Experience</h4>
  </Link> */}
  <Link to="contact" smooth={true} duration={500}>
    <h4>Contact</h4>
  </Link>
  <h4 className="header-rightbutton">Connect</h4>
</div>


    </div>
  )
}

export default header;