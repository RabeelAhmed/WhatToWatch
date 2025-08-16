import React from 'react';
import { Film, Heart } from 'lucide-react';

const Navigation = ({ currentPage, onNavigate, watchlistCount = 0 }) => {
  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Film className="w-8 h-8 text-fuchsia-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              WhatToWatch
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-2 rounded-xl transition-all duration-300 ${
                currentPage === 'home' 
                  ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('watchlist')}
              className={`px-6 py-2 rounded-xl transition-all duration-300 flex items-center ${
                currentPage === 'watchlist' 
                  ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Watchlist ({watchlistCount})
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;