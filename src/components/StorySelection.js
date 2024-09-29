import { motion } from 'framer-motion'

export default function StorySelection({ onSelect }) {
  const stories = [
    { id: 1, title: "The Lost Temple of Time", emoji: "🕌" },
    { id: 2, title: "Galactic Odyssey", emoji: "🚀" },
    { id: 3, title: "Echoes of Ancient Starfarers", emoji: "🏛️" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="game-title">Choose Your Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <motion.button
              key={story.id}
              onClick={() => onSelect(story)}
              className="game-button flex flex-col items-center justify-center h-48"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-6xl mb-4">{story.emoji}</span>
              <p className="text-xl text-center">{story.title}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}