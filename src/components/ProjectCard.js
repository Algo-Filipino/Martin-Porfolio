

import React from 'react';

import './ProjectsSection.css';


const ProjectCard = (props) => {
  return (

      <div className='project-container'>
          <div className='project-card'>
          <img src={props.imagesrc} alt="project1" />
          <h2 className='project-title'>{props. title}</h2>
            <div className='project-details'>
            <p>Tech Stack:{props.text}</p>
            <div className='project-buttons'>
              <a href={props.srcs} className="button">Source</a>
              <a href={props.view} className="button">Live</a>
            </div>
            </div>
          </div>

      </div>

    
    
  );
};

export default ProjectCard;
