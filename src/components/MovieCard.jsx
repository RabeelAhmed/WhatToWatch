import React from 'react';
import { Star } from 'lucide-react';
import { getImageUrl } from '../utils/helpers';
import WorthItBadge from './WorthItBadge';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      className="group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15"
      onClick={() => onClick(movie)}
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={getImageUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">{movie.vote_average.toFixed(1)}</span>
          </div>
          <WorthItBadge rating={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;