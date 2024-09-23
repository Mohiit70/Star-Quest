import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Title = styled.h1`
  font-size: 3rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  margin-bottom: 2rem;
`;

function MainMenu({ onPlay }) {
  return (
    <div>
      <Title>Neon Shadows</Title>
      <Button onClick={onPlay}>Play</Button>
      <Button onClick={() => alert('Learn More clicked')}>Learn More</Button>
      <Button onClick={() => alert('Settings clicked')}>Settings</Button>
    </div>
  );
}

export default MainMenu;