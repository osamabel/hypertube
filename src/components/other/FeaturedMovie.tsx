'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the movie type
interface Movie {
  id: number;
  title: string;
  description: string;
  imdbScore: number;
  duration: string;
  imageUrl: string;
}

interface FeaturedMovieProps {
  movies: Movie[];
}

const FeaturedMovie: React.FC<FeaturedMovieProps> = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentMovie = movies[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const handleIndicatorClick = (index: number) => {
    if (index !== currentIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ 
          backgroundImage: `url(${currentMovie.imageUrl})`,
          backgroundSize: 'cover',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Movie Content */}
      <div className={`relative z-10 h-full flex flex-col justify-center px-8 max-w-3xl transition-opacity duration-500 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}>
        <h1 className="text-6xl font-bold mb-4">{currentMovie.title}</h1>
        
        <p className="text-lg mb-8 text-gray-200 max-w-2xl">
          {currentMovie.description}
        </p>
        
        <div className="flex space-x-4 items-center mb-8">
          <span className="text-primary font-semibold">IMDb {currentMovie.imdbScore}</span>
          <span className="text-gray-300">{currentMovie.duration}</span>
        </div>
        
        <div className="flex space-x-4">
          <button className="bg-primary hover:bg-primary-hover text-white font-medium py-3 px-8 rounded-full flex items-center">
            <span className="mr-2">Watch Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-full flex items-center">
            <span>Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex space-x-2 mt-12">
          {movies.map((_, index) => (
            <button 
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-12 bg-white' 
                  : 'w-8 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovie;