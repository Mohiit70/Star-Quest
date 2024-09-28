import { useState, useEffect } from 'react';
import { generateStory } from '../utils/llamaApi';

export default function GamePlay({ story, character }) {
  const [currentScene, setCurrentScene] = useState('');
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStory();
  }, [story, character]);

  const fetchStory = async (choice = null) => {
    setLoading(true);
    setError(null);
    try {
      const sceneData = await generateStory(story, character, choice);
      setCurrentScene(sceneData.scene);
      setChoices(sceneData.choices);
    } catch (err) {
      setError('Failed to generate story. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChoice = (choice) => {
    fetchStory(choice);
  };

  if (loading) {
    return <div className="text-center text-lg text-black">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-lg">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-black">Star Quest: {story.title}</h2>
      <p className="text-lg mb-8 text-black">{currentScene}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}