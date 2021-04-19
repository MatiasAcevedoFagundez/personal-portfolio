import React from 'react';
import WorkCard from '../../components/WorkCard';
import avatar from '../../images/brand/avatar.png';
import TitleContainer from './TitleContainer';
import CardContainer from './CardContainer';
import Container from './Container';

const MyWork = () => (
  <Container>
    <TitleContainer id="work">
      <h1>
        Some of my <bold>personal projects</bold>
      </h1>
    </TitleContainer>
    <CardContainer>
      <WorkCard
        image={avatar}
        title="Test Card"
        text="This is a simple text card"
        url="https://www.freecodecamp.org/"
      />
      <WorkCard
        image={avatar}
        title="Test Card"
        text="This is a simple text card"
        url="https://www.freecodecamp.org/"
      />
      <WorkCard
        image={avatar}
        title="Test Card"
        text="This is a simple text card"
        url="https://www.freecodecamp.org/"
      />
    </CardContainer>
  </Container>
);

MyWork.propTypes = {};

export default MyWork;
