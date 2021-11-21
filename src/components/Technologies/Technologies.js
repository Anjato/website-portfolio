import React from 'react';
import {
    DiCode,
    DiFirebase,
    DiReact,
} from 'react-icons/di';
import {
    SiHackaday,
} from 'react-icons/si';
import {
    HiOutlineDotsCircleHorizontal,
} from 'react-icons/hi';
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle
} from '../../styles/GlobalComponents';
import {
    List,
    ListContainer,
    ListItem,
    ListParagraph,
    ListTitle
} from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id={"tech"}>
      <SectionDivider />
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a large variety of programming languages to accomplish several projects. More recently I have
          started to hone in on specific languages and skills to have a more specialized skill set to be more efficient
          and successful.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Front-End Web</ListTitle>
                  <ListParagraph>
                      React.js, Next.js, CSS, HTML
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size={"3rem"}/>
          <ListContainer>
              <ListTitle>Back-End Web</ListTitle>
              <ListParagraph>
                  Node.js, Express.js, Databases
              </ListParagraph>
          </ListContainer>
      </ListItem>
          <ListItem>
              <SiHackaday size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Hacking</ListTitle>
                  <ListParagraph>
                      Reverse Engineering Games, <br/>
                      Nintendo Switch Homebrew, <br/>
                      iOS Jailbreak, Android Rooting, <br/>
                      Cheat Engine
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      <ListItem>
          <DiCode size={"3rem"}/>
          <ListContainer>
              <ListTitle>Languages</ListTitle>
              <ListParagraph>
                  Python, C++, Assembly, <br/>
                  JavaScript
              </ListParagraph>
          </ListContainer>
      </ListItem>
          <ListItem>
              <HiOutlineDotsCircleHorizontal size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Misc.</ListTitle>
                  <ListParagraph>
                      Game Servers, Git, GitHub, <br/>
                      Arch Linux, Windows, MacOS <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
