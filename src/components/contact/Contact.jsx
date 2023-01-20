
import './contact.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BiSend} from 'react-icons/bi'
import {BsTelephone} from 'react-icons/bs'
import Resume from '../assets/Resume.pdf'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_9rk3pzt', 'template_bv2i56r', form.current, 'ZGo1xvEJXcNmtn9Er')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="container">
    <div id='contact'>
      <div className="row">
        <div className="contact-left">
            <h1 className='sub-title'>Contact Me</h1>

            <p><BiSend /> prabhatkushwah21@gmail.com</p>
            <p><BsTelephone /> +917007428216</p>
            <div className="social-icons">
                <a href="https://www.instagram.com/spaghetti.disc/"><AiFillInstagram /></a>
                <a href="https://github.com/prabhat0921/"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/prabhatdevkush/"><AiFillLinkedin /></a>
            </div>
            <a href={Resume} download className='btn btn2' >Resume</a>
        </div>
        <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='Name' placeholder='Your Name' required />
                <input type="email" name='email' placeholder='eneter your email' required />
                <textarea name="Message" rows="6"></textarea>
                <button type='submit' className='btn btn2'>Send</button>
            </form>
        </div>
      </div>
    </div>
    <div className="copyright">
        <h4>Copyright &copy; Prabhat. Made with ❤. </h4>
    </div>
    </div>
  )
}

export default Contact