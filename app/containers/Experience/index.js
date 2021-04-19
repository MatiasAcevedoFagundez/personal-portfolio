import React from 'react';
import TitleContainer from './TitleContainer';
import Container from './Container';
import Text from './Text';

const Experience = () => (
  <Container>
    <TitleContainer id="about">
      <h1>
        <bold>Experience</bold>
      </h1>
    </TitleContainer>
    <Text>
      <i
        className="ri-macbook-line"
        style={{ color: '#061a63', fontSize: '56px', marginRight: '30px' }}
      />
      <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        Full Stack Developer at Octobot (2019 - Current){' '}
      </span>
    </Text>
    <Text>
      <i
        className="ri-book-2-line"
        style={{ color: '#061a63', fontSize: '56px', marginRight: '30px' }}
      />
      <span style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        Licenciatura en Sistemas - Universidad ORT (2018 - Current)
      </span>
    </Text>
  </Container>
);

Experience.propTypes = {};

export default Experience;
