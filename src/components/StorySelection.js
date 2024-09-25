const stories = [
    { id: 1, title: "The Lost Temple of Time", emoji: "🕌" },
    { id: 2, title: "Galactic Odyssey", emoji: "🚀" },
    { id: 3, title: "Echoes of Ancient Starfarers", emoji: "🏛️" },
  ];
  
  export default function StorySelection({ onSelect }) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8 text-yellow-500">Choose Your Adventure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => onSelect(story)}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-6 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="text-6xl mb-4 block">{story.emoji}</span>
              <p className="text-xl">{story.title}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }