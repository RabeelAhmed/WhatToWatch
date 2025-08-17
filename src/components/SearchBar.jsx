import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, onSearch, loading = false, placeholder = "Search for movies..." }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
        className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 pr-20 sm:pr-24 bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300 text-sm sm:text-base"
      />
      <Search className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      <button
        onClick={() => onSearch(value)}
        className="absolute right-1 sm:right-2 top-1 sm:top-2 bottom-1 sm:bottom-2 px-3 sm:px-6 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 rounded-lg sm:rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300 text-xs sm:text-sm whitespace-nowrap"
        disabled={loading}
      >
        {loading ? (
          <span className="hidden sm:inline">Searching...</span>
        ) : (
          <span className="hidden sm:inline">Search</span>
        )}
        {loading ? (
          <span className="sm:hidden">...</span>
        ) : (
          <span className="sm:hidden">Go</span>
        )}
      </button>
    </div>
  );
};

export default SearchBar;