import React, { useState } from 'react'
import "./contact.scss"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [message,setMessage]=useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_q960dnq', 'template_09wxagc', form.current, 'tpplMFSCjrfl0dLqL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id="contact">
    <div className='left'>
      <img src="photos/contact.jpeg" alt="can't view"></img>
    </div>
    <div className='right'>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
     
      <input type="text" name="user_name" placeholder="Your Name"/>
      
      <input type="email" name="user_email" placeholder="Your Email" />
    
      <textarea name="message" placeholder="Message"/>
      <input className="btn" type="submit" value="Send" />
      {message && <span>Thanks, I'll reply ASAP :)</span>}
    </form>
    </div>
    </div>
  )
}
