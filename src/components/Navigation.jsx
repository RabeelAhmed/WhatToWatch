import React, { useState } from 'react';
import { Film, Heart, Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, onNavigate, watchlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <Film className="w-6 h-6 sm:w-8 sm:h-8 text-fuchsia-400" />
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              WhatToWatch
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => handleNavigation('home')}
                className={`px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                  currentPage === 'home' 
                    ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('watchlist')}
                className={`px-4 py-3 rounded-xl transition-all duration-300 flex items-center ${
                  currentPage === 'watchlist' 
                    ? 'bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Heart className="w-4 h-4 mr-2" />
                Watchlist ({watchlistCount})
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;