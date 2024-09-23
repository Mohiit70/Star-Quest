import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
`;

const Tagline = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const HowItWorksSection = styled.section`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HowItWorksText = styled.div`
  flex: 1;
  text-align: left;
`;

const HowItWorksImage = styled.img`
  flex: 1;
  max-width: 50%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
`;

const LandingPage = ({ onPlay, onHowItWorks }) => {
  return (
    <LandingContainer>
      <Title>Galactic Odyssey</Title>
      <Tagline>Embark on an epic journey through the cosmos</Tagline>
      <ButtonContainer>
        <Button onClick={onPlay}>Play Now</Button>
        <Button onClick={onHowItWorks}>How It Works</Button>
      </ButtonContainer>

      <HowItWorksSection id="how-it-works">
        <HowItWorksText>
          <h2>About the Game</h2>
          <p>
            Galactic Odyssey is an immersive text-based adventure game that combines
            the power of AI with classic storytelling. Choose your character, embark
            on thrilling missions, and shape the fate of the galaxy with your decisions.
            Will you become a legendary space explorer, a cunning diplomat, or a
            fearsome warrior? The choice is yours in this epic sci-fi journey!
          </p>
        </HowItWorksText>
        <HowItWorksImage src="/images/game-screenshot.png" alt="Game Screenshot" />
      </HowItWorksSection>
    </LandingContainer>
  );
};

export default LandingPage;