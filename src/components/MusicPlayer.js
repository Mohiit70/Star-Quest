'use client';

import { useState, useEffect, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('../music/background-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.play();

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full"
    >
      {isPlaying ? '🔊' : '🔇'} {/* Show sound icon based on play/pause state */}
    </button>
  );
}
