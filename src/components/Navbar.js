import React from 'react';
import styled from 'styled-components';
import { VolumeX, Volume2 } from 'lucide-react';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #00ffff;
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff00ff;
  }
`;

const MuteButton = styled.button`
  background: none;
  border: none;
  color: #00ffff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff00ff;
  }
`;

const Navbar = ({ onToggleMute, isMuted }) => {
  return (
    <NavbarContainer>
      <NavLinks>
        <NavLink href="https://github.com/yourusername/your-repo" target="_blank">GitHub</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#how-it-works">How It Works</NavLink>
      </NavLinks>
      <MuteButton onClick={onToggleMute}>
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </MuteButton>
    </NavbarContainer>
  );
};

export default Navbar;