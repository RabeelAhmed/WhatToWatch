import React from 'react';
import { Film } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const HomePage = ({ 
  searchQuery, 
  setSearchQuery, 
  onSearch, 
  trending, 
  popular, 
  onMovieClick, 
  loading 
}) => {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Hero Section */}
      <div className="text-center py-10 sm:py-16 md:py-20 px-4">
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <Film className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-fuchsia-400 mr-2 sm:mr-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent leading-tight">
            WhatToWatch
          </h1>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
          Discover your next favorite movie
        </p>
        
        <div className="max-w-2xl mx-auto px-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={onSearch}
            loading={loading}
          />
        </div>
      </div>

      {/* Trending Section */}
      <section className="px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 flex items-center">
          <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-fuchsia-500 to-violet-500 mr-3 sm:mr-4 rounded"></span>
          Trending Now
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section className="px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 md:mb-8 flex items-center">
          <span className="w-1 h-6 sm:h-8 bg-gradient-to-b from-violet-500 to-indigo-500 mr-3 sm:mr-4 rounded"></span>
          Popular Movies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 md:gap-6">
          {popular.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;