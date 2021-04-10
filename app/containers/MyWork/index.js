import React from 'react';
import WorkCard from '../../components/WorkCard';
import avatar from '../../images/brand/avatar.png';
import Presentation from '../HomePage/Presentation';
import CardContainer from './CardContainer';

const MyWork = () => (
  <>
    <Presentation>
      <h1>
        Some of my <bold>personal projects</bold>
      </h1>
    </Presentation>
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
  </>
);

MyWork.propTypes = {};

export default MyWork;
