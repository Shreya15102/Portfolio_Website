
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";
import {Experience} from "./components/experience/Experience";
import {Contact} from "./components/contact/Contact";
import "./app.scss";
import {Menu} from "./components/menu/Menu";
import { useState } from "react";
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { ProjectDisplay } from "./components/projects/ProjectDisplay";

function App() {
  const[menuopen,setmenuopen]=useState(false);
  return (
    <div className="app">
    
      <Topbar menu={menuopen} setmenu={setmenuopen}/>
      <Menu menu={menuopen} setmenu={setmenuopen}/>
      <div className="sections">
      
      
      
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
   <Contact/>
      
      </div>
      </div>

  );
}

export default App;
