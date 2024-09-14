import React, { useState, useEffect } from 'react';
import { startGame, makeChoice } from '../services/api';
import Story from './Story';
import Choices from './Choices';
import Inventory from './Inventory';

function Game() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const initGame = async () => {
      const initialState = await startGame();
      setGameState(initialState);
    };
    initGame();
  }, []);

  const handleChoice = async (action) => {
    const newState = await makeChoice(action);
    setGameState(newState);
  };

  if (!gameState) return <div>Loading...</div>;

  return (
    <div className="game">
      <Story text={gameState.story} />
      <Choices choices={gameState.choices} onChoice={handleChoice} />
      <Inventory items={gameState.inventory} />
    </div>
  );
}

export default Game;