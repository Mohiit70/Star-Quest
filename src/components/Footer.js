import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  background-color: #000;
  color: #fff;
  text-align: center;
  margin-top: 2rem;
`;

const FooterLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  margin: 0 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #cc00cc;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Sci-Fi Text Adventure. All rights reserved.</p>
      <p>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
        <FooterLink href="#privacy">Privacy Policy</FooterLink>
      </p>
    </FooterContainer>
  );
};

export default Footer;