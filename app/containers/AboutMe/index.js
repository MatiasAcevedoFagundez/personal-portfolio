import React from 'react';
import TitleContainer from './TitleContainer';
import Container from './Container';
import Text from './Text';

const AboutMe = () => (
  <Container>
    <TitleContainer id="about">
      <h1>
        <bold>About me</bold>
      </h1>
    </TitleContainer>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text>
  </Container>
);

AboutMe.propTypes = {};

export default AboutMe;
