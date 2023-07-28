import React from 'react'
import {GitHub} from "@material-ui/icons";
import "./projectDisplay.scss";
import {ProjectList} from "./ProjectList";
import {useParams} from "react-router-dom"

export const ProjectDisplay = () => {
    const {id}=useParams();
    const project=ProjectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>
            <b>Skills:</b> {project.skills}
        </p>
       <a href=""><GitHub/></a> 
    </div>
  )
}
