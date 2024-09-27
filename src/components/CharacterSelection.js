import { useState } from 'react';

export default function CharacterSelection({ onSelect }) {
  const [characterName, setCharacterName] = useState('');

  const characters = [
    { id: 1, name: "Space Explorer", emoji: "🧑‍🚀" },
    { id: 2, name: "Alien Diplomat", emoji: "🖖" },
    { id: 3, name: "Cosmic Engineer", emoji: "👩‍🔧" },
  ];

  const handleSubmit = (character) => {
    if (characterName.trim()) {
      onSelect({ ...character, customName: characterName });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">Choose Your Character</h2>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Enter your character name"
          className="w-full mb-8 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => handleSubmit(character)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-8 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              <span className="text-6xl mb-4 block">{character.emoji}</span>
              <p className="text-xl">{character.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}