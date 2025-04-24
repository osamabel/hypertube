'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define the movie type
interface Movie {
  id: number;
  title: string;
  description: string;
  imdbScore: number;
  duration: string;
  imageUrl: string;
}

interface MovieGridProps {
  title: string;
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ title, movies }) => {
  return (
    <section className="px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">{title}</h2>
        <Link href="/movies" className="text-primary hover:text-primary-hover flex items-center">
          <span>View All</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <div className="movie-card rounded-lg overflow-hidden group">
              <div className="relative aspect-[2/3]">
                <Image 
                  src={movie.imageUrl} 
                  alt={movie.title}
                  fill
                  className="object-cover"
                />
                
                {/* Hover overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="font-medium text-sm md:text-base">{movie.title}</h3>
                  <div className="flex items-center mt-1 text-xs md:text-sm">
                    <span className="text-primary mr-2">{movie.imdbScore}</span>
                    <span className="text-gray-300">{movie.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieGrid;