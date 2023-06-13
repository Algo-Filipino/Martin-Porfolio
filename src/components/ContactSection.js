import React from 'react';
import './ContactSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form action="https://formsubmit.co/estreramartin037@gmail.com" method="POST">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="social-media">
        <h2>Connect with Me</h2>
        <div className="social-links">
  <a href="https://www.facebook.com/martinnoy29" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://www.instagram.com/tinnoy_/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://t.me/@martinestreramartinez" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTelegram} />
  </a>
  <a href="https://github.com/martin037" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://www.linkedin.com/in/martin-estrera-086a0a172/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>

   
      </div>
    </section>
  );
};

export default ContactSection;
