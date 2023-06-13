import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';
import Picture from '../images/mine.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import CV from '../cv/Martin Martinez- Resume.pdf';
import { Document, Page } from 'react-pdf';


const HomePage = () => {
  const homeRef = useRef(null);
  const textRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Front End Developer', 'Network Administrator', 'Back End Developer'];

  useEffect(() => {
    const homeSection = homeRef.current;
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setAnimate(entry.isIntersecting);
    }, observerOptions);

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      const intervalId = setInterval(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [animate]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Martin Martinez-Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <section id="home" className={`home ${animate ? 'animate' : ''}`} ref={homeRef}>
      <div className={`home-content ${animate ? 'animate' : ''}`}>
        <div className={`column ${animate ? 'floating' : ''}`}>
          <img src={Picture} alt="Your Picture" />
        </div>
        <div className={`column ${animate ? 'fade-in' : ''}`}>
          <h1 style={{ color: 'white' }}>Hi, I am Martin!</h1>
          <div className='change-text' ref={textRef}>
            <h3>And I'm</h3>
            <h3>
              <span className={`word ${animate ? 'animate' : ''}`} style={{ color: 'cyan' }}>
                {words[currentWordIndex]}
              </span>
            </h3>
          </div>
         
          <div className="cv-button">
            <a href="#" onClick={() => handleDownload()}>Download CV</a>
          </div>
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
      </div>
    </section>
  );
}

export default HomePage;
