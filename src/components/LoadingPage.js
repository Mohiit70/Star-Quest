import { useEffect } from 'react';
import Image from 'next/image';

export default function LoadingPage({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-800 p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4 text-yellow-500">How to Play Star Quest</h2>
        <p className="mb-4 text-gray-300">
          Star Quest is an interactive text-based adventure game set in a sci-fi universe. 
          Choose your character and make decisions that will shape the outcome of your journey.
        </p>
        <ol className="list-decimal list-inside text-gray-300">
          <li className="mb-2">Select a story from ancient myths or futuristic tales</li>
          <li className="mb-2">Choose your character with unique abilities</li>
          <li className="mb-2">Read the story and make pivotal choices</li>
          <li>Explore different endings based on your decisions</li>
        </ol>
      </div>
      <div className="md:w-1/2 p-4">
        <Image src="/images/game-thumbnail.png" alt="Star Quest" width={500} height={300} className="rounded-lg shadow-lg" />
      </div>
    </div>
  );
}