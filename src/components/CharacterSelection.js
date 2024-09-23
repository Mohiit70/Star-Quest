import React from 'react';
import styled from 'styled-components';
import { characters } from '../data/characters';

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CharacterCard = styled.div`
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

const CharacterImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const CharacterName = styled.h3`
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const CharacterDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #fff;
`;

function CharacterSelection({ onSelect }) {
  return (
    <div>
      <h2>Select Your Character</h2>
      <CharacterGrid>
        {characters.map((character) => (
          <CharacterCard key={character.name} onClick={() => onSelect(character)}>
            <CharacterImage src={character.image} alt={character.name} />
            <CharacterName>{character.name}</CharacterName>
            <CharacterDescription>{character.description}</CharacterDescription>
          </CharacterCard>
        ))}
      </CharacterGrid>
    </div>
  );
}

export default CharacterSelection;