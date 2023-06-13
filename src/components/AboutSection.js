import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = aboutRef.current;
      const windowHeight = window.innerHeight;
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const sectionBottom = aboutSection.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight * 0.8 && sectionBottom > 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className={`about ${animate ? 'animate' : ''}`} ref={aboutRef}>
      <div className={`about__content ${animate ? 'animate' : ''}`}>
        <h2>About Me</h2>
       <p>Hello, I'm  Martin Martinez, and I have knowledge in Front End Development, Backend Development, and Network Administration. I have a comprehensive skill set to deliver high-quality solutions, with a strong foundation in core frontend technologies and considerable understanding in backend programming.  </p>
      <p>My knowledge of MySQL enables me to create backend solutions that interface with the database, allowing for dynamic content and data-driven functionality. I understand the fundamentals of integrating frontend and backend technologies to ensure a consistent user experience and effective data processing.</p>
        <p>Besides my expertise in web programming, I also have a wealth of knowledge in network administration and infrastructure. I am skilled at configuring and utilizing a variety of networking tools to guarantee a trustworthy and secure connection. I am skilled at pinpointing and successfully resolving any network-related issues thanks to my extensive knowledge of firewalls, routing, and network protocols.</p>
      </div>
    </section>
  );
};

export default AboutSection;
