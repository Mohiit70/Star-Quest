import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { generateStory } from '@/utils/llamaApi'

export default function GamePlay({ story, character }) {
  const [currentScene, setCurrentScene] = useState('')
  const [choices, setChoices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
    } catch (err) {
      setError('Failed to generate story. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChoice = (choice) => {
    fetchStory(choice)
  }

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-purple-300">Star Quest: {story.title}</h2>
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
    </div>
  )
}