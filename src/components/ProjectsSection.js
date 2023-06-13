import React, { useEffect, useRef, useState } from 'react';
import './ProjectsSection.css';
import ProjectCard from './ProjectCard';
import ProjectsData from './ProjectsData';

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = projectsRef.current;
      const windowHeight = window.innerHeight;
      const sectionTop = projectsSection.getBoundingClientRect().top;
      const sectionBottom = projectsSection.getBoundingClientRect().bottom;

      if (sectionTop < windowHeight * 0.8 && sectionBottom > -windowHeight * 0.8) {
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
    <section id="projects" className={`projects ${animate ? 'animate' : ''}`} ref={projectsRef}>
      <div className={`container ${animate ? 'animate' : ''}`}>
        <h1 className='head'>Projects</h1>
        <div className='project-container'>
          {ProjectsData.map((val, ind) => (
            <ProjectCard
              key={ind}
              imagesrc={val.imagesrc}
              title={val.title}
              text={val.text}
              srcs={val.srcs}
              view={val.view}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
