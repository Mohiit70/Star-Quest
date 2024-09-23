import React from 'react';
import styled from 'styled-components';
import { stories } from '../data/stories';

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StoryCard = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const StoryTitle = styled.h3`
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const StoryDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
`;

function StorySelection({ onSelect }) {
  return (
    <div>
      <h2>Choose Your Story</h2>
      <StoryGrid>
        {stories.map((story) => (
          <StoryCard key={story.title} onClick={() => onSelect(story)}>
            <StoryImage src={story.image} alt={story.title} />
            <StoryTitle>{story.title}</StoryTitle>
            <StoryDescription>{story.description}</StoryDescription>
          </StoryCard>
        ))}
      </StoryGrid>
    </div>
  );
}

export default StorySelection;