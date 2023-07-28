import React from 'react'
import "./about.scss";
import TextSphere from "./TextSphere";
import ProgressBar from "@ramonak/react-progress-bar";
export const About = () => {
  return (
    <div className='about' id="about">
      <div className='header'>
      <h1>About Me</h1>
      
      </div>
      <div className='left'>
        <div className='content'>
          <div className='photo'>
            <img src="photos/photo_1.jpeg"></img>
          </div>
          <div className='info'>
            <p>Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization.</p>

             <div className='skills'>
            <h3>Skills</h3>
            <ul>
              <div className='bar'>
              <li> C++</li>
              <ProgressBar completed = {95} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
              <br></br>
              <div className='bar'>
              <li> Data Structures</li>
              <ProgressBar completed = {85} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false}  />
              </div>
              <br></br>
              <div className='bar'>
              <li> Problem Solving</li>
              <ProgressBar completed = {80} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
              <br></br>
              <div className='bar'>
              <li> SQL</li>
              <ProgressBar completed = {75} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
              <br></br>
              <div className='bar'>
              <li>HTML</li>
              <ProgressBar completed = {60} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
              <br></br>
              <div className='bar'>
              <li> CSS</li>
              <ProgressBar completed = {60} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
              <br></br>
              <div className='bar'>
              <li> JavaScript</li>
              <ProgressBar completed = {60} bgColor = "red" height={10} width={200} animateOnRender = {true} isLabelVisible = {false} />
              </div>
            </ul>
            
         
         <br></br>
         
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
