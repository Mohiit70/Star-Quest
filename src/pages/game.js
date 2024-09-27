'use client'

import { useState } from 'react';
import LoadingPage from '@/components/LoadingPage';
import StorySelection from '@/components/StorySelection';
import CharacterSelection from '@/components/CharacterSelection';
import GamePlay from '@/components/GamePlay';

export default function Game() {
  const [gameState, setGameState] = useState('loading');
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleStorySelect = (story) => {
    setSelectedStory(story);
    setGameState('character-select');
  };

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character);
    setGameState('play');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <div className="game-container">
        {gameState === 'loading' && <LoadingPage onComplete={() => setGameState('story-select')} />}
        {gameState === 'story-select' && <StorySelection onSelect={handleStorySelect} />}
        {gameState === 'character-select' && <CharacterSelection onSelect={handleCharacterSelect} />}
        {gameState === 'play' && <GamePlay story={selectedStory} character={selectedCharacter} />}
      </div>
    </div>
  );
}