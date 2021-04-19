import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GrMailOption } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import TitleContainer from './TitleContainer';
import Container from './Container';
import SkillsContainer from './SkillsContainer';

const ContactMe = () => (
  <Container>
    <TitleContainer id="contact">
      <h1>
        Feel free to <bold>contact</bold> me
      </h1>
    </TitleContainer>
    <SkillsContainer>
      <IconContext.Provider value={{ size: 60 }}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/matiasacevedofagundez/"
          style={{ color: 'inherit' }}
        >
          <FaLinkedin style={{ margin: '20px' }} />
        </a>
        <a
          target="_blank"
          href="https://github.com/MatiasAcevedoFagundez"
          style={{ color: 'inherit' }}
        >
          <FaGithub style={{ margin: '20px' }} />
        </a>
        <a
          target="_blank"
          href="mailto:colopocositio@gmail.com"
          style={{ color: 'inherit' }}
        >
          <GrMailOption style={{ margin: '20px' }} />
        </a>
      </IconContext.Provider>
    </SkillsContainer>
  </Container>
);

ContactMe.propTypes = {};

export default ContactMe;
