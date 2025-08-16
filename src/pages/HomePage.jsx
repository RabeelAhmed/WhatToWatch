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
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-20">
        <div className="flex items-center justify-center mb-6">
          <Film className="w-12 h-12 text-fuchsia-400 mr-4" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            WhatToWatch
          </h1>
        </div>
        <p className="text-xl text-gray-300 mb-8">Discover your next favorite movie</p>
        
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSearch={onSearch}
          loading={loading}
        />
      </div>

      {/* Trending Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-1 h-8 bg-gradient-to-b from-fuchsia-500 to-violet-500 mr-4 rounded"></span>
          Trending Now
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {trending.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      </section>

      {/* Popular Section */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
          <span className="w-1 h-8 bg-gradient-to-b from-violet-500 to-indigo-500 mr-4 rounded"></span>
          Popular Movies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {popular.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;