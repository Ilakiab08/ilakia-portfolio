import React from 'react'

const projectcontainer = () => {
    const my_projects=[
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
my_projects.map((projects,index)=>{

})
    </div>
   </Element>
   
  )
}

export default projectcontainer