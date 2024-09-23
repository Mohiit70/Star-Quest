import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 2rem;
`;

const TextContainer = styled.div`
  width: 50%;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const HowItWorks = () => {
  return (
    <Section>
      <TextContainer>
        <h2>How It Works</h2>
        <p>
          Choose a character and a story, then make decisions that will shape your adventure. Each choice leads to different outcomes, creating a unique experience every time.
        </p>
      </TextContainer>
      <ImageContainer>
        <img src="/images/game-screenshot.png" alt="Game Screenshot" />
      </ImageContainer>
    </Section>
  );
};

export default HowItWorks;