import React from 'react'
import {Element} from 'react-scroll'
const Projectcontainer = () => {
    const project=[
        {
            img:"images/Travel.jpg",
            title:"Travel Destination",
            description: "",
            link:"https://ilakiab08-github-io.vercel.app/",
        },
        {
            img:"",
            title:"",
            description: "",
            link:"",
        },
        
    ];
    return (
        <Element className="projectcontainer" id="Projects">
            <h1>Projects</h1>
            <p>I have displayed my projects here</p>
            <div className='projectcontainer_projects'>
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.description}
                            link={project.link}
                        />
                    );
                })}
            </div>
        </Element>
    );
}

export default Projectcontainer;