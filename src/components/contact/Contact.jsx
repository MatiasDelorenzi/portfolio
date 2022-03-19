import { useState } from 'react';
import './contact.scss';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="contactForm">

          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' />
            <textarea placeholder='Message'></textarea>
            <button type='submit'>Send</button>
            {message && <span>Thanks! I will reply ASAP</span>}
          </form>

        </div>

        <div className="socials">
          <h2>My socials.</h2>
          <div className="logos">
            <a href="https://github.com/MatiasDelorenzi" rel="noreferrer" target="_blank">
              <div className='imageContainer'>
                <img src="assets/github.png" className='linkedin' alt='' />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/matias-delorenzi/" rel="noreferrer" target="_blank">
              <div className='imageContainer'>
                <img src="assets/linkedin.png" className='linkedin' alt='' />
              </div>
            </a>
            <a href="https://www.instagram.com/matias.delorenzi/?hl=es-la" rel="noreferrer" target="_blank">
              <div className='imageContainer'>
                <img src="assets/instagram.png" className='linkedin' alt='' />
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}
