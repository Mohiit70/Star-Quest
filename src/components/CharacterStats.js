import { motion } from 'framer-motion'

export default function CharacterStats({ character, inventory }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed left-4 top-20 bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-lg max-w-xs"
    >
      <h3 className="text-xl font-bold mb-2 text-blue-300">{character.customName || character.name}</h3>
      <ul className="text-gray-300 mb-4">
        <li>Health: 100%</li>
        <li>Energy: 80%</li>
        <li>Credits: 500</li>
      </ul>
      <h4 className="text-lg font-semibold mb-2 text-blue-300">Inventory</h4>
      {inventory.length > 0 ? (
        <ul className="text-gray-300">
          {inventory.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 italic">No items yet</p>
      )}
    </motion.div>
  )
}