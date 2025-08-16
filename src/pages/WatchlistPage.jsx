import React from 'react';
import { Heart } from 'lucide-react';
import MovieCard from '../components/MovieCard';

const WatchlistPage = ({ watchlist, onMovieClick, onBack, onDiscoverMovies }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <Heart className="w-8 h-8 mr-3 text-fuchsia-400" />
          My Watchlist
        </h2>
        <button
          onClick={onBack}
          className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/20 transition-all duration-300"
        >
          ← Back to Home
        </button>
      </div>
      
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {watchlist.map(movie => (
            <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-xl text-gray-400 mb-4">Your watchlist is empty</p>
          <button
            onClick={onDiscoverMovies}
            className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 rounded-2xl text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Discover Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;