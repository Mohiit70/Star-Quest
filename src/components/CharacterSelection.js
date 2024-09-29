import { useState } from 'react'
import { motion } from 'framer-motion'

export default function CharacterSelection({ onSelect }) {
  const [characterName, setCharacterName] = useState('')

  const characters = [
    { id: 1, name: "Space Explorer", emoji: "🧑‍🚀" },
    { id: 2, name: "Alien Diplomat", emoji: "🖖" },
    { id: 3, name: "Cosmic Engineer", emoji: "👩‍🔧" },
  ]

  const handleSubmit = (character) => {
    if (characterName.trim()) {
      onSelect({ ...character, customName: characterName })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="game-title">Choose Your Character</h2>
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Enter your character name"
          className="game-input"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {characters.map((character) => (
            <motion.button
              key={character.id}
              onClick={() => handleSubmit(character)}
              className="game-button flex flex-col items-center justify-center h-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-6xl mb-4">{character.emoji}</span>
              <p className="text-xl text-center">{character.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}