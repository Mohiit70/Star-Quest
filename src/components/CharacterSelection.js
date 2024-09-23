import React from 'react';
import styled from 'styled-components';
import { characters } from '../data/characters';

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const CharacterCard = styled.div`
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

function CharacterSelection({ onSelect }) {
  return (
    <div>
      <h2>Select Your Character</h2>
      <CharacterGrid>
        {characters.map((character) => (
          <CharacterCard key={character.name} onClick={() => onSelect(character)}>
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </CharacterCard>
        ))}
      </CharacterGrid>
    </div>
  );
}

export default CharacterSelection;