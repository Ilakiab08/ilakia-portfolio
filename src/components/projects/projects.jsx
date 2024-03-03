import React ,  {useState} from 'react'
import './projects.css';
const projects = ({ img,title,desc,link} ) => {
    const[show,setShow]= useState(false);

  return (
    <a href={link}>
    <div className='projects'
    onMouseEnter={()=> setShow(true)}
    onm onMouseLeave={setShow(false)}
    >
    (show ?(
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    ) :(
        <img src={img} alt="" />
    ))    
    </div>
    </a>
  )
}

export default projects