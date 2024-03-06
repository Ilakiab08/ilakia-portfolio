import React from 'react'
import {Element} from 'react-scroll'
import  './skills.css';
import { LinearProgress } from '@mui/material';
const skills = () => {
  return (
    <Element className='skillscontainer' id ='skills'>
        <div className='skillscontainer_img'>
            <img src="images/developer.png" alt="" />
        </div>
        <div className='skills_text'>
            <h2>Skillset</h2>
       <div className='skillset'>
        <h5>React</h5>
        <div className='skill_slider skill_slider1' ></div>
       <LinearProgress variant ="determinate" value={50} />
       </div>
       <div className='skillset'>
        <h5>Css</h5>
        <div className='skill_slider skill_slider2' ></div>
       <LinearProgress variant ="determinate" value={80} />
       </div>
       <div className='skillset'>
        <h5>Javascript</h5>
        <div className='skill_slider skill_slider3' ></div>
       <LinearProgress variant ="determinate" value={70} />
       </div>
       <div className='skillset'>
        <h5>Figma</h5>
        <div className='skill_slider skill_slider4' ></div>
       <LinearProgress variant ="determinate" value={90} />
       </div>
       </div>
        </Element>
  )
}

export default skills