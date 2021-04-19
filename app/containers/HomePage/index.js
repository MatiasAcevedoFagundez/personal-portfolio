import React from 'react';
import PresentationSection from './PresentationSection';
import MyWork from '../MyWork';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Skills from '../Skills';
import ContactMe from '../ContactMe';

const HomePage = () => (
  <>
    <PresentationSection />
    <AboutMe />
    <Experience />
    <Skills />
    <MyWork />
    <ContactMe />
  </>
);

HomePage.propTypes = {};

export default HomePage;
