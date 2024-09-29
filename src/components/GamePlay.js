import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { generateStory } from '@/utils/llamaApi'
import CharacterStats from './CharacterStats'

export default function GamePlay({ story, character }) {
  const [currentScene, setCurrentScene] = useState('')
  const [choices, setChoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [backgroundImage, setBackgroundImage] = useState('/default-background.jpg')
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    fetchStory()
  }, [story, character])

  const fetchStory = async (choice = null) => {
    setLoading(true)
    setError(null)
    try {
      const sceneData = await generateStory(story, character, choice)
      setCurrentScene(sceneData.scene)
      setChoices(sceneData.choices)
      if (sceneData.backgroundImage) {
        setBackgroundImage(sceneData.backgroundImage)
      }
      if (sceneData.newItems) {
        setInventory(prevInventory => [...prevInventory, ...sceneData.newItems])
      }
    } catch (err) {
      setError('Failed to generate story. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChoice = (choice) => {
    fetchStory(choice)
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Scene Background"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <CharacterStats character={character} inventory={inventory} />
      <div className="relative z-10 max-w-4xl w-full bg-gray-900 bg-opacity-80 p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-6 text-blue-300">Star Quest: {story.title}</h2>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-lg text-blue-300"
            >
              <div className="loader"></div>
              Loading...
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-red-500 text-lg"
            >
              {error}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-8 text-gray-300">{currentScene}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {choices.map((choice, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleChoice(choice)}
                    className="game-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {choice}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}