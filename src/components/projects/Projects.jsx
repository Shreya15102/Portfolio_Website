import React from 'react'
import "./projects.scss"
import {ProjectList} from "./ProjectList"
import {ProjectItem} from "./ProjectItem"
//import "./projects.scss";
export const Projects = () => {
  return (
    <div className='projects' id="projects">
      <h1>My Projects</h1>
      <div className='projectList'>
         {ProjectList.map((project)=>{
           return <ProjectItem name={project.name} image={project.image} skills={project.skills} link={project.link}/>
         })}
      </div>
    </div>
  )
}
