import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

function NavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`NavigationBar ${isSticky ? 'sticky' : ''}`}>
      <header>
        <nav>
          <div className="logo">MM</div>
          <ul className={`nav-links ${isNavOpen ? 'nav-active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger-menu" onClick={toggleNav}>
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavigationBar;
