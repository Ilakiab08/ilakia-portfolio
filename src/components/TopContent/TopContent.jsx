
import React from 'react';
import { Link } from 'react-scroll';

const TopContent = () => {
  return (
    <div className='TopContent'>
      <div className='TopContent_container'>
        <h1>Tamizh ilakia Rajarathinam</h1>
        <p> Front-end Developer </p>
        <a><button>Download CV</button></a>
        <Link to = "projects">
            <button>My Projects</button>
        </Link>

      </div>
    </div>
  );
};

export default TopContent;
