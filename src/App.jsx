import React from 'react';
import Header from './components/header/header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillsContainer from './components/skillscontainer/skills';

import { Projectcontainer } from "./components/projectcontainer/projectcontainer"; 

const App = () => {


  return (
    <div>
      <Header />
   
      <TopContainer />
      <SkillsContainer />
      <Projectcontainer/>
    </div>
  );
};

export default App;
