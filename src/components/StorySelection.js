import Image from 'next/image'
import { motion } from 'framer-motion'

export default function StorySelection({ onSelect }) {
  const stories = [
    { id: 1, title: "The Lost Temple of Time", image: "/pikaso_texttoimage_A-mysterious-ancient-temple-with-glowing-time-port.jpeg" },
    { id: 2, title: "Galactic Odyssey", image: "/9e0a7c7a-a415-41c2-90ea-35cd1d06d256.jpeg" },
    { id: 3, title: "Echoes of Ancient Starfarers", image: "/pikaso_texttoimage_A-cosmic-library-with-shelves-extending-into-infin.jpeg" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="game-title">Choose Your Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <motion.button
              key={story.id}
              onClick={() => onSelect(story)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/50 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-300">{story.title}</h3>
                <p className="text-gray-400">Embark on an epic journey through time and space.</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}