import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from './components/MainMenu';
import CharacterSelection from './components/CharacterSelection';
import StorySelection from './components/StorySelection';
import GameContent from './components/GameContent';

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
`;

const GameWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 2rem;
  width: 80%;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
`;

function App() {
  const [gameState, setGameState] = useState('mainMenu');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);

  const renderContent = () => {
    switch (gameState) {
      case 'mainMenu':
        return <MainMenu onPlay={() => setGameState('characterSelection')} />;
      case 'characterSelection':
        return (
          <CharacterSelection
            onSelect={(character) => {
              setSelectedCharacter(character);
              setGameState('storySelection');
            }}
          />
        );
      case 'storySelection':
        return (
          <StorySelection
            onSelect={(story) => {
              setSelectedStory(story);
              setGameState('gameContent');
            }}
          />
        );
      case 'gameContent':
        return (
          <GameContent
            character={selectedCharacter}
            story={selectedStory}
            onRestart={() => setGameState('mainMenu')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AppContainer>
      <GameWindow>{renderContent()}</GameWindow>
    </AppContainer>
  );
}

export default App;