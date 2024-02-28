
import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';
const TopContent = () => {
  return (
    <div className='topcontent'>
      <div className='topcontent_container'>
        <h1>Tamizh ilakia Rajarathinam</h1>
        <p> Front-end Developer </p>
        <a><button className='topcontent_download'>Download CV</button></a>
        <Link to = "projects">
            <button className='topcontent_projects'>My Projects</button>
        </Link>

      </div>
    </div>
  );
};

export default TopContent;
