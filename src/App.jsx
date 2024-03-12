import React from 'react';
import Header from './components/header/header';
import TopContainer from './components/TopContainer/TopContainer';
import SkillsContainer from './components/skillscontainer/skills';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/language/LanguageSelector';
import { Projectcontainer } from "./components/projectcontainer/projectcontainer"; 

const App = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <LanguageSelector />
      <TopContainer />
      <SkillsContainer />
      <Projectcontainer/>
    </div>
  );
};

export default App;
