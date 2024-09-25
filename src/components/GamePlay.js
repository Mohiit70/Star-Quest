import { useState, useEffect } from 'react';
import { generateStory } from '../utils/llamaApi';

export default function GamePlay({ story, character }) {
  const [currentScene, setCurrentScene] = useState('');
  const [choices, setChoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      setLoading(true);
      const initialScene = await generateStory(story, character);
      setCurrentScene(initialScene.scene);
      setChoices(initialScene.choices);
      setLoading(false);
    };

    fetchStory();
  }, [story, character]);

  const handleChoice = async (choice) => {
    setLoading(true);
    const nextScene = await generateStory(story, character, choice);
    setCurrentScene(nextScene.scene);
    setChoices(nextScene.choices);
    setLoading(false);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Star Quest: {story.title}</h2>
      <p className="mb-4">{currentScene}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleChoice(choice)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}