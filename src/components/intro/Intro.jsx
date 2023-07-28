import React, { useEffect } from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useRef } from 'react';
import { KeyboardArrowDown } from "@material-ui/icons";

function Intro() {
  const textRef=useRef();
  const text2Ref=useRef();
  useEffect(() => {
    //console.log({textRef});
    init(textRef.current,{
      showCursor:false,
      loop:false,
      typeSpeed:80,
      strings:["Shreya Agarwal"]
    })
  },[]);
  // useEffect(() => {
  //   //console.log({textRef});
  //   init(text2Ref.current,{
  //     showCursor:false,
  //     loop:false,
  //     startDelay:50,
  //     typeSpeed:20,
  //     strings:["A Software Developer with a passion for learning and creating."]
  //   })
  // },[]);
 
  
  return (
    <div className='intro' id="intro">
      <div className='left'>
        <div className='image'>
          <img src="photos/me3.png" alt=' sorry, cannot view the image'></img>
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1 ref={textRef}></h1>
          <h3>A Software Engineer with a passion for learning and creating.</h3>
          <div className='CV'>
          <button className="btn">
            <a href="https://drive.google.com/file/d/1_idE_PpmQ93ZcUHGb-uL49tUZe_JSsNx/view?usp=sharing" target="_blank" download>Download CV</a>
          </button>
          <button className="btn">
            <a href="https://drive.google.com/file/d/1aOkLYRDJQZ1I0GeV0QnZCH7CpE6AoWuS/view?usp=sharing" target="_blank">Video Resume</a>
          </button>
          </div>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="arrow"/>
        </a>
      </div>
    </div>
  )
}

export default Intro