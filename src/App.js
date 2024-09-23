import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import ParticlesBackground from './styles/ParticlesBackground';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HowItWorks from './components/HowItWorks';
import MainMenu from './components/MainMenu';
import CharacterSelection from './components/CharacterSelection';
import StorySelection from './components/StorySelection';
import GameContent from './components/GameContent';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url('/images/sci-fi-background.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
`;

const GameWindow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

function App() {
  const [gameState, setGameState] = useState('landing');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  
  useEffect(() => {
    const audio = new Audio('/sounds/background-music.mp3');
    audio.loop = true;
    audio.volume = 0.1;
    
    if (!isMuted) {
      audio.play();
    }
    
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isMuted]);

  const handlePlay = () => setGameState('mainMenu');
  const handleHowItWorks = () => setGameState('howItWorks');
  const handleBackToLanding = () => setGameState('landing');
  const handleRestart = () => {
    setGameState('mainMenu');
    setSelectedCharacter(null);
    setSelectedStory(null);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const renderContent = () => {
    switch (gameState) {
      case 'landing':
        return <LandingPage onPlay={handlePlay} onHowItWorks={handleHowItWorks} />;
      case 'howItWorks':
        return <HowItWorks onBack={handleBackToLanding} />;
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
            onRestart={handleRestart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <ParticlesBackground />
      <Navbar onToggleMute={toggleMute} isMuted={isMuted} />
      <GameWindow>{renderContent()}</GameWindow>
      <Footer />
    </AppContainer>
  );
}

export default App;