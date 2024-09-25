import { useState } from 'react';

const characters = [
  { id: 1, name: "Space Explorer", emoji: "🧑‍🚀" },
  { id: 2, name: "Alien Diplomat", emoji: "🖖" },
  { id: 3, name: "Cosmic Engineer", emoji: "👩‍🔧" },
];

export default function CharacterSelection({ onSelect }) {
  const [characterName, setCharacterName] = useState('');

  const handleSubmit = (character) => {
    if (characterName.trim()) {
      onSelect({ ...character, customName: characterName });
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Choose Your Character</h2>
      <input
        type="text"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        placeholder="Enter your character name"
        className="mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters.map((character) => (
          <button
            key={character.id}
            onClick={() => handleSubmit(character)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded"
          >
            <span className="text-4xl mb-2">{character.emoji}</span>
            <p>{character.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}