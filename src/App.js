// App.js
import React from 'react';
import Logo from './components/Logo';
import Bio from './components/Bio';
import Experience from './components/Experience';
import SelectedWork from './components/SelectedWork';
import PassionProjects from './components/PassionProjects';
import './App.css';

const App = () => {
  return (
    <div>
      <Logo />
      <Bio />
      <Experience />
      <SelectedWork />
      <PassionProjects />
    </div>
  );
};

export default App;
