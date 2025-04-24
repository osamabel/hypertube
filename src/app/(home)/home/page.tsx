// src/app/(home)/home/page.tsx
'use client';

import FeaturedMovie from '@/components/other/FeaturedMovie';
import MovieGrid from '@/components/other/MovieGrid';
import React from 'react';

// Movie data with descriptions and IMDb scores
const movies = [
  {
    id: 1,
    title: "RUSH",
    description: "A thrilling biopic that chronicles the fierce rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 racing season, showcasing their contrasting personalities and dangerous pursuit of victory.",
    imdbScore: 8.1,
    duration: "2h 3m",
    imageUrl: "/thumbnail/film1.jpg"
  },
  {
    id: 2,
    title: "SEVEN",
    description: "A gripping psychological thriller following two detectives as they track a meticulous serial killer who structures his murders around the seven deadly sins, leading to a shocking and unforgettable conclusion.",
    imdbScore: 8.6,
    duration: "2h 7m",
    imageUrl: "/thumbnail/film2.jpg"
  },
  {
    id: 3,
    title: "THE DISASTER ARTIST",
    description: "A comedic retelling of the making of Tommy Wiseau's cult classic 'The Room,' often considered one of the worst films ever made, exploring the strange friendship between Wiseau and actor Greg Sestero.",
    imdbScore: 7.4,
    duration: "1h 44m",
    imageUrl: "/thumbnail/film3.jpg"
  },
  {
    id: 4,
    title: "IT",
    description: "A terrifying adaptation of Stephen King's novel where a group of children in a small town face their worst fears when confronted by an ancient, shape-shifting entity that preys on the town's children every 27 years.",
    imdbScore: 7.3,
    duration: "2h 15m",
    imageUrl: "/thumbnail/film4.jpg"
  },
  {
    id: 5,
    title: "LOGAN",
    description: "A gritty, emotional conclusion to Wolverine's story, set in a future where mutants are nearly extinct. An aging Logan must protect a young girl with similar abilities while dealing with his own mortality.",
    imdbScore: 8.1,
    duration: "2h 17m",
    imageUrl: "/thumbnail/film5.jpg"
  }
];

// Additional categories with the same movies for demo purposes
const popularMovies = [...movies].sort((a, b) => b.imdbScore - a.imdbScore);
const recentMovies = [...movies].sort(() => Math.random() - 0.5);

export default function HomePage() {
  return (
    <div>
      {/* Featured Movie Hero Section */}
      <FeaturedMovie movies={movies} />
      
      {/* Movie Grids */}
      <MovieGrid title="Trending Movies" movies={movies} />
      <MovieGrid title="Popular Movies" movies={popularMovies} />
      <MovieGrid title="Recently Added" movies={recentMovies} />
    </div>
  );
}