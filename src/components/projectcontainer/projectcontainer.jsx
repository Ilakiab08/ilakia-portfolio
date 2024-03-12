import React from "react";
import { Element } from "react-scroll";
import { Project } from "./projects/projects.jsx"; 
import './projectcontainer.css'
export const Projectcontainer = () => {
    const projectsData = [
        {
            img: "images/Travel.jpg",
            title: "Travel Destination",
            description: "Description of the project",
            link: "https://ilakiab08-github-io.vercel.app/",
        },
        {
            img: "images/Quiz.jpg",
            title: "Quiz",
            description: "Description of Project 2",
            link: "https://gruppeprosjekt-quiz.vercel.app/",
        },
        {
            img: "images/Travel.jpg",
            title: "Travel Destination",
            description: "Description of the project",
            link: "https://ilakiab08-github-io.vercel.app/",
        },
        {
            img: "images/Quiz.jpg",
            title: "Quiz",
            description: "Description of Project 2",
            link: "https://gruppeprosjekt-quiz.vercel.app/",
        },
        {
            img: "images/Travel.jpg",
            title: "Travel Destination",
            description: "Description of the project",
            link: "https://ilakiab08-github-io.vercel.app/",
        },
        {
            img: "images/Quiz.jpg",
            title: "Quiz",
            description: "Description of Project 2",
            link: "https://gruppeprosjekt-quiz.vercel.app/",
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
