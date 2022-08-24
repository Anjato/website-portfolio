import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Feel free to reach out for any inquiries via my GitHub or LinkedIn.</Slogan>
            </CompanyContainer>
            <SocialIcons href="https://www.github.com/Anjato" target="_blank">
                <AiFillGithub size="3rem" />
            </SocialIcons><SocialIcons href="https://www.linkedin.com/in/andrew-t-704a161a4" target="_blank">
            <AiFillLinkedin size="3rem" />
        </SocialIcons>
            <SocialIcons href="https://www.youtube.com/channel/UC8HHtru-c-h8OJao60JdnEg" target="_blank">
                <AiFillYoutube size="3rem" />
            </SocialIcons>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
