import React from 'react';
import styled from 'styled-components';
import { stories } from '../data/stories';

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const StoryCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

function StorySelection({ onSelect }) {
  return (
    <div>
      <h2>Choose Your Story</h2>
      <StoryGrid>
        {stories.map((story) => (
          <StoryCard key={story.title} onClick={() => onSelect(story)}>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </StoryCard>
        ))}
      </StoryGrid>
    </div>
  );
}

export default StorySelection;