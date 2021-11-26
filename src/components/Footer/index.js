import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIconLink, SocialIcons, SocialMedia } from "./FooterElements";

const Footer = () => {
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About me</FooterLinkTitle>
                <FooterLink to="/about">About me</FooterLink>
                <FooterLink to="/about">About me2</FooterLink>
                <FooterLink to="/about">About me3</FooterLink>
                <FooterLink to="/about">About me4</FooterLink>
                <FooterLink to="/about">About me5</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/about">About me</FooterLink>
                <FooterLink to="/about">About me2</FooterLink>
                <FooterLink to="/about">About me3</FooterLink>
                <FooterLink to="/about">About me4</FooterLink>
                <FooterLink to="/about">About me5</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/about">About me</FooterLink>
                <FooterLink to="/about">About me2</FooterLink>
                <FooterLink to="/about">About me3</FooterLink>
                <FooterLink to="/about">About me4</FooterLink>
                <FooterLink to="/about">About me5</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Dzaki</SocialLogo>
              <WebsiteRights>by rzdzaky {new Date().getFullYear()}</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
