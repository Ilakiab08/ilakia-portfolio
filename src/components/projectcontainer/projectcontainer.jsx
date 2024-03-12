import React from "react";
import { Element } from "react-scroll";
import { Project } from "../../projects/projects.jsx";


export const Projectcontainer = () => {
    const projectsData = [
        {
            img: "images/Travel.jpg",
            title: "Travel Destination",
            description: "Description of the project",
            link: "https://ilakiab08-github-io.vercel.app/",
        },
        {
            img: "images/Project2.jpg",
            title: "Project 2",
            description: "Description of Project 2",
            link: "https://example.com",
        },
    ];

    return (
        <Element className="projectcontainer" id="Projects">
            <h1>Projects</h1>
            <p>I have displayed my projects here</p>
            <div className='projectcontainer_projects'>
                {projectsData.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            img={project.img}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    );
                })}
            </div>
        </Element>
    );
}
