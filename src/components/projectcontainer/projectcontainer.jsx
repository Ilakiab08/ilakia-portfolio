import React from "react";
import { Element } from "react-scroll";
import { Project } from "./projects/projects.jsx"; 
import './projectcontainer.css'
export const Projectcontainer = () => {
    const projectsData = [
        {
            img: "./images/Travel.jpg",
            title: "Travel Destination",
            description: "Description of the project",
            link: "https://ilakiab08-github-io.vercel.app/",
        },
        {
            img: "./images/Quiz.jpg",
            title: "Quiz",
            description: "Description of Project 2",
            link: "https://gruppeprosjekt-quiz.vercel.app/",
        },
        {
            img: "./images/overview of companies.png",
            title: "Overview of companies",
            description: "Description of the project",
            link: "https://overview-of-companies.vercel.app/",
        },
        {
            img: "./images/todo.png",
            title: "TodoList",
            description: "Description of Project 2",
            link: "https://ilakiab08.github.io/todolist-miniproject/",
        },
        {
            img: "./images/Drumkit.png",
            title: "Simple drumkit",
            description: "Description of the project",
            link: "https://ilakiab08.github.io/simpledrumkit/",
        },
        {
            img: "./images/Birthdaygift.png",
            title: "Birthday gift site",
            description: "Description of Project 2",
            link: "https://ilakiab08.github.io/Birthday-gift-site/",
        },
    ];

    return (
        <Element className="projectcontainer" id="projects">
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
