import React from 'react';
import { Star, Play, Plus, Minus, Calendar, Clock, Users } from 'lucide-react';
import { getImageUrl, getWorthItVerdict, formatRuntime, formatReleaseDate } from '../utils/helpers';
import MovieCard from '../components/MovieCard';

const MovieDetails = ({ 
  movie, 
  onBack, 
  isInWatchlist, 
  onAddToWatchlist, 
  onRemoveFromWatchlist,
  onMovieClick 
}) => {
  if (!movie) return null;
  
  const verdict = getWorthItVerdict(movie.vote_average);
  const inWatchlist = isInWatchlist(movie.id);

  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-xl text-white hover:bg-white/20 transition-all duration-300"
      >
        ← Back
      </button>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Poster */}
        <div className="space-y-6">
          <div className="aspect-[2/3] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <button
            onClick={() => inWatchlist ? onRemoveFromWatchlist(movie.id) : onAddToWatchlist(movie)}
            className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 ${
              inWatchlist 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 hover:shadow-lg text-white'
            }`}
          >
            {inWatchlist ? (
              <>
                <Minus className="w-5 h-5 inline mr-2" />
                Remove from Watchlist
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 inline mr-2" />
                Add to Watchlist
              </>
            )}
          </button>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">{movie.vote_average.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>{formatReleaseDate(movie.release_date)}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>{formatRuntime(movie.runtime)}</span>
              </div>

              <div className={`px-4 py-2 rounded-full font-medium bg-gradient-to-r ${verdict.color} text-white`}>
                {verdict.emoji} {verdict.text}
              </div>
            </div>

            {movie.genres && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map(genre => (
                  <span key={genre.id} className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm text-gray-300">
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <p className="text-gray-300 text-lg leading-relaxed mb-8">{movie.overview}</p>

            {movie.trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${movie.trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 rounded-2xl text-white font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Trailer
              </a>
            )}
          </div>

          {/* Cast */}
          {movie.cast && movie.cast.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Cast
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {movie.cast.map(actor => (
                  <div key={actor.id} className="bg-white/10 backdrop-blur-xl rounded-xl p-4">
                    <p className="text-white font-medium">{actor.name}</p>
                    <p className="text-gray-400 text-sm">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Similar Movies */}
          {movie.similar && movie.similar.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Similar Movies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {movie.similar.map(movie => (
                  <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;