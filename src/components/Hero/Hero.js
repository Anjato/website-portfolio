import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Welcome to <br />
              My Portfolio!
          </SectionTitle>
          <SectionText>
              The purpose of my portfolio is to showcase of some of my projects and provide a short description about who I am.
          </SectionText>
          <Button onClick={() => window.location = "#about"}>Contact Me</Button>
      </LeftSection>
  </Section>
);

export default Hero;