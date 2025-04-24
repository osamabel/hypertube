'use client';

import React, { useState, useEffect } from 'react';
import { Movie } from '@/types/movie';

// Sample movie data
const sampleMovies: Movie[] = [
  {
    id: 1,
    title: "The Last Adventure",
    description: "Explore our rich and varied collection of films, from action thrillers to heartwarming dramas, thrilling comedies and thrilling adventures. Get movie recommendations tailored to your taste, so you can find the perfect show for every mood. Don't miss the chance to explore Ndelok!",
    imdbScore: 8.7,
    duration: "2h 15m",
    imageUrl: "https://picsum.photos/700"
  },
  {
    id: 2,
    title: "Midnight City",
    description: "Let's find your favorite movies on our movie streaming app! We open the door to a world of limitless entertainment at your fingertips. Enjoy an unforgettable viewing experience with a wide selection of the latest genres and film titles that are always updated.",
    imdbScore: 7.9,
    duration: "1h 55m",
    imageUrl: "https://picsum.photos/600"
  },
  {
    id: 3,
    title: "The Final Countdown",
    description: "Discover a world of cinematic masterpieces from acclaimed directors and talented actors. Our platform offers exclusive content that you won't find anywhere else, all in stunning HD quality.",
    imdbScore: 8.2,
    duration: "2h 28m",
    imageUrl: "https://picsum.photos/500"
  },
  {
    id: 4,
    title: "Lost in Time",
    description: "From indie gems to blockbuster hits, we've curated the best films from around the world. Our smart recommendation system learns your preferences to suggest movies you'll love.",
    imdbScore: 9.1,
    duration: "2h 5m",
    imageUrl: "https://picsum.photos/400"
  }
];

const MovieCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleMovies.length);
        setIsTransitioning(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentMovie = sampleMovies[currentIndex];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      {/* Movie Background Image */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${currentMovie.imageUrl})` 
        }}
      />

      {/* Movie Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <div className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-3xl font-bold mb-4">{currentMovie.title}</p>
          <p className="mb-8 text-lg">{currentMovie.description}</p>
          
          {/* Progress Indicators */}
          <div className="flex space-x-2 mt-8">
            {sampleMovies.map((_, index) => (
              <div 
                key={index} 
                className={`h-1 rounded-full ${
                  index === currentIndex ? 'bg-white w-24' : 'bg-gray-500 w-12'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;