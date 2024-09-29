import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CharacterSelection({ onSelect }) {
  const [characterName, setCharacterName] = useState('')

  const characters = [
    { id: 1, name: "Space Explorer", image: "/pikaso_texttoimage_A-determined-space-explorer-in-a-sleek-spacesuit-s.jpeg" },
    { id: 2, name: "Alien Diplomat", image: "/pikaso_texttoimage_A-mysterious-hooded-figure-with-glowing-eyes-wield.jpeg" },
    { id: 3, name: "Cosmic Engineer", image: "/pikaso_texttoimage_A-resourceful-cosmic-engineer-working-on-a-complex (1).jpeg" },
  ]

  const handleSubmit = (character) => {
    if (characterName.trim()) {
      onSelect({ ...character, customName: characterName })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="game-title">Choose Your Character</h2>
        <div className="mb-8">
          <input
            type="text"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Enter your character name"
            className="game-input"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character) => (
            <motion.button
              key={character.id}
              onClick={() => handleSubmit(character)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/50 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={character.image}
                  alt={character.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">{character.name}</h3>
                <p className="text-gray-400">Choose your role in this cosmic adventure.</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}