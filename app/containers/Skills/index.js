import React from 'react';
import { FaReact } from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiStyledComponents,
  SiGit,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import TitleContainer from './TitleContainer';
import Container from './Container';
import SkillsContainer from './SkillsContainer';

const Skills = () => (
  <Container>
    <TitleContainer id="about">
      <h1>
        <bold>Skills</bold>
      </h1>
    </TitleContainer>
    <SkillsContainer>
      <IconContext.Provider value={{ size: 60 }}>
        <SiJavascript style={{ margin: '20px' }} />
        <FaReact style={{ margin: '20px' }} />
        <SiPython style={{ margin: '20px' }} />
        <SiDjango style={{ margin: '20px' }} />
        <SiStyledComponents style={{ margin: '20px' }} />
        <SiGit style={{ margin: '20px' }} />
      </IconContext.Provider>
    </SkillsContainer>
  </Container>
);

Skills.propTypes = {};

export default Skills;
