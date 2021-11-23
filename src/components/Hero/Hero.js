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
              The purpose of my portfolio is to showcase some of my personal projects and provide a quick background
              about myself.
          </SectionText>
          <Button onClick={() => window.location = "#about"}>Contact Me</Button>
      </LeftSection>
  </Section>
);

export default Hero;