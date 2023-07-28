import React from 'react'
//import {useNavigate} from "react-router-dom";
import {GitHub} from "@material-ui/icons";

export const ProjectItem = ({name,image,skills,link}) => {
   
  return (
    <div className='projectItem'>
  <div style={{backgroundImage: `url(${image})`}} className="bgImage" />
    <h3 style={{color:"black"}}>{name}</h3>
    <h3 >Skills: <span style={{color:"crimson"}}>{skills}</span></h3>
     <a href={link} target="_blank"><GitHub style={{color:"rgba(55, 50, 50, 0.945)"}} /></a>
    </div>
  )
}
