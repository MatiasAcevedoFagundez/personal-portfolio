import React from 'react';
import Typical from 'react-typical';
import Presentation from './Presentation';
import AvatarContainer from './AvatarContainer';
import avatar from '../../images/brand/avatar.png';
import Avatar from './Avatar';
import NameContainer from './NameContainer';

const PresentationSection = () => (
  <>
    <Presentation>
      <NameContainer>
        <h1>
          Hi, I&apos;m
          <Typical
            steps={[
              ' Matias Acevedo',
              2000,
              ' a Full Stack Developer',
              2000,
              ' a Student',
              2000,
              ' Matias Acevedo',
              2000,
            ]}
            loop={1}
            wrapper="bold"
          />
        </h1>
      </NameContainer>
      <AvatarContainer>
        <Avatar src={avatar} alt="Matias Acevedo - avatar" />
      </AvatarContainer>
      <h2>I am passionate about what I do, and I want to keep learning.</h2>
    </Presentation>
  </>
);

PresentationSection.propTypes = {};

export default PresentationSection;
