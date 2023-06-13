import React from 'react';
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import About from "./components/AboutSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
