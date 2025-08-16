import React from 'react';
import { Film } from 'lucide-react';
import MovieCard from '../components/MovieCard';

const SearchResults = ({ results, onMovieClick, onBack }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Search Results</h2>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/20 transition-all duration-300"
        >
          ← Back to Home
        </button>
      </div>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {results.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-xl text-gray-400">No movies found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;