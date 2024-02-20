import React from 'react'
import {link} from 'react-scroll'
const header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Develop <span>er</span></h1>
        </div>
        <div className='header-right'>
        <link to="about" smooth={true} duration={500}>
            <h4>About me</h4>
    </link>
    <link to="skills" smooth={true} duration={500}>
            <h4>Skills</h4>
    </link>
    <link to="projects" smooth={true} duration={500}>
            <h4>Projects</h4>
    </link>
    <link to="experience" smooth={true} duration={500}>
            <h4>Experience</h4>
    </link>
    <link to="contact" smooth={true} duration={500}>
            <h4>Contact</h4>
    </link>
        </div>

    </div>
  )
}

export default header