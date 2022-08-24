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
    ImLab,
} from 'react-icons/im';
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
import {GridContainer} from "../Projects/ProjectsStyles";


const Technologies = () =>  (
  <Section id={"tech"}>
      <SectionDivider />
      <GridContainer />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a large variety of programming languages to accomplish several projects. More recently I have
          started to hone in on specific languages and skills to have a more specialized skill set.
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
                      Cheat Engine, HTB
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      <ListItem>
          <DiCode size={"3rem"}/>
          <ListContainer>
              <ListTitle>Languages</ListTitle>
              <ListParagraph>
                  Python, C++, Assembly, <br/>
                  JavaScript, C#, Java, Kotlin <br/>

              </ListParagraph>
          </ListContainer>
      </ListItem>
          <ListItem>
              <ImLab size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Home Lab & Network</ListTitle>
                  <ListParagraph>
                      Opnsense, managed switches, <br/>
                      proxmox, active directory, <br/>
                      openvpn, Dell r720, server racks, <br/>
                      RAID
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <HiOutlineDotsCircleHorizontal size={"3rem"}/>
              <ListContainer>
                  <ListTitle>Misc.</ListTitle>
                  <ListParagraph>
                      Game Servers, Git, GitHub, <br/>
                      Arch Linux, Windows, MacOS, <br/>
                      TestRails, JIRA, CI/CD <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
