import React from 'react';
import {DiCode, DiFirebase, DiReact, DiZend} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={"tech"}>
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a large variety of programming languages to accomplish several projects. More recently I have
          started to hone in on specific languages and skills in order to have a more specialized skill set in order
          to be more efficient and successful.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Front-End Web</ListTitle>
                  <ListParagraph>
                      React.js, CSS, HTML
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
          <DiFirebase size={"3rem"}/>
          <ListContainer>
              <ListTitle>Back-End Web</ListTitle>
              <ListParagraph>
                  Node.js, Databases
              </ListParagraph>
          </ListContainer>
      </ListItem>
      <ListItem>
          <DiCode size={"3rem"}/>
          <ListContainer>
              <ListTitle>Other</ListTitle>
              <ListParagraph>
                  Python, C++, Assembly <br/>
                  Game Servers, Cheat Engine <br/>

              </ListParagraph>
          </ListContainer>
      </ListItem>
      </List>
  </Section>
);

export default Technologies;
