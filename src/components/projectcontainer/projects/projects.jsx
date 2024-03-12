import React, { useState } from 'react';
import './projects.css';

 export const Project = ({ img, title, description, link }) => {
  const [show, setShow] = useState(false);

  return (
    <a href={link}>
      <div
        className='project'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)} 
      >
        {show ? (
          <div className='projectcontent'>
            <h4>{title}</h4>
            <p>{description}</p> 
          </div>
        ) : (
          <img src={img} alt="" />
        )}
      </div>
    </a>
  );
}


