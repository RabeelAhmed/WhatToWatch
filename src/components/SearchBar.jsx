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
        className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-xl rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all duration-300"
      />
      <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <button
        onClick={() => onSearch(value)}
        className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300"
        disabled={loading}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchBar;