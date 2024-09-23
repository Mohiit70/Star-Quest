import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { getAIResponse } from '../api/groq';
import Button from './Button';

const StoryText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

function GameContent({ character, story, onRestart }) {
  const [currentStory, setCurrentStory] = useState('');
  const [choices, setChoices] = useState([]);

  const startGame = useCallback(async () => {
    const initialPrompt = `You are playing as ${character.name} in the story "${story.title}". ${story.initialSituation}`;
    const response = await getAIResponse(initialPrompt);
    updateGameContent(response);
  }, [character.name, story.title, story.initialSituation]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const updateGameContent = (aiResponse) => {
    setCurrentStory(aiResponse.story);
    setChoices(aiResponse.choices);
  };

  const makeChoice = async (choice) => {
    const prompt = `${currentStory}\n\nPlayer chose: ${choice}\n\nWhat happens next?`;
    const response = await getAIResponse(prompt);
    updateGameContent(response);
  };

  return (
    <div>
      <StoryText>{currentStory}</StoryText>
      <ChoiceContainer>
        {choices.map((choice, index) => (
          <Button key={index} onClick={() => makeChoice(choice)}>
            {choice}
          </Button>
        ))}
      </ChoiceContainer>
      <Button onClick={onRestart} style={{ marginTop: '1rem' }}>
        Restart Game
      </Button>
    </div>
  );
}

export default GameContent;