import React from 'react'
import "./menu.scss"

export const Menu = ({menu,setmenu}) => {
  return (
    <div className={"menu "+(menu && "active")}>
        <ul className='ul'>
            <li onClick={()=>setmenu(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setmenu(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setmenu(false)}>
                <a href="#projects">Projects</a>
            </li>
            <li onClick={()=>setmenu(false)}>
                <a href="#experience">Experience</a>
            </li>
            <li onClick={()=>setmenu(false)}>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
    </div>
  )
}
