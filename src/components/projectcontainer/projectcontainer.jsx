import React from 'react'

const projectcontainer = () => {
    const project=[
        {
            img:"",
            title:"",
            description: "",
            link:"",
        },
        {
            img:"",
            title:"",
            description: "",
            link:"",
        },
        
    ];
  return (
   <Element className="projectcontainer"  id="Projects">
    <h1>Projects</h1>
    <p>I have displayed my projects here</p>
    <div className='projectcontainer_projects'>
project.map((projects,index)={
    return (
        <project
        key={index}
        img={project.img}
        title={project.title}
        desc={project.description}
        link={project.link}
        />
    );
})


    </div>
   </Element>
   
  )
}

export default projectcontainer