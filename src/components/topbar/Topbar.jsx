import React from 'react'
import "./topbar.scss"
import {Mail,GitHub,LinkedIn} from "@material-ui/icons";

function Topbar({menu,setmenu}) {
  return (
    <div className={"topbar "+(menu && "active")}>
     <div className='wrapper'>
       <div className='left'>
          <div className='items'>
            <a href="https://github.com/Shreya15102" target="_blank"><GitHub className='info'/></a>
            
          </div>
          <div className='items'>
            <a href="https://www.linkedin.com/in/shreya-agarwal-332289202/" target="_blank"><LinkedIn className='info'/></a>
            
          </div>
          <div className='items'>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJqbQxqglrPRLsRDsttDFxHKThChXcqMrkVDgGRlRssvnHXwhDlgXqBTrsMpmTFgwFvsWsB" target='_blank'><Mail className='info'/></a>
          </div>
       </div>
       <div className='right'>
        <div className='hamburger' onClick={()=>setmenu(!menu)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Topbar