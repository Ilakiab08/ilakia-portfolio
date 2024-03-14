import React from 'react';
import Header from './components/header/header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillsContainer from './components/skillscontainer/skills';
import './App.css'
import { Projectcontainer } from "./components/projectcontainer/projectcontainer"; 
import {Contact} from './components/contact/contact';

const App = () => {


  return (
    <div>
      <Header />
    
   
      <TopContainer />
      <SkillsContainer />
      <Projectcontainer/>
      <Contact/>
     
    </div>
  );
};

export default App;
