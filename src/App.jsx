import React, { useState, useEffect } from 'react';
import { tmdbApi } from './services/tmdbApi';
import { useWatchlist } from './hooks/useWatchlist';
import Navigation from './components/Navigation';
import LoadingSpinner from './components/LoadingSpinner';
import HomePage from './pages/HomePage';
import SearchResults from './pages/SearchResults';
import MovieDetails from './pages/MovieDetails';
import WatchlistPage from './pages/WatchlistPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    watchlistCount
  } = useWatchlist();

  useEffect(() => {
    fetchTrending();
    fetchPopular();
  }, []);

  const fetchTrending = async () => {
    try {
      const data = await tmdbApi.getTrendingMovies();
      setTrending(data.results.slice(0, 8));
    } catch (error) {
      console.error('Error fetching trending:', error);
    }
  };

  const fetchPopular = async () => {
    try {
      const data = await tmdbApi.getPopularMovies();
      setPopular(data.results.slice(0, 8));
    } catch (error) {
      console.error('Error fetching popular:', error);
    }
  };

  const searchMovies = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await tmdbApi.searchMovies(query);
      setSearchResults(data.results);
      setCurrentPage('search');
    } catch (error) {
      console.error('Error searching movies:', error);
    }
    setLoading(false);
  };

  const fetchMovieDetails = async (movie) => {
    setLoading(true);
    setSelectedMovie(movie);
    try {
      const details = await tmdbApi.getMovieDetails(movie.id);
      setMovieDetails(details);
      setCurrentPage('details');
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
    setLoading(false);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSearchQuery('');
    setSearchResults([]);
    setSelectedMovie(null);
    setMovieDetails(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
      <Navigation 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        watchlistCount={watchlistCount} 
      />

      <main className="container mx-auto px-6 py-12">
        {loading && <LoadingSpinner />}
        
        {currentPage === 'home' && (
          <HomePage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={searchMovies}
            trending={trending}
            popular={popular}
            onMovieClick={fetchMovieDetails}
            loading={loading}
          />
        )}
        
        {currentPage === 'search' && (
          <SearchResults 
            results={searchResults}
            onMovieClick={fetchMovieDetails}
            onBack={handleBackToHome}
          />
        )}
        
        {currentPage === 'details' && (
          <MovieDetails 
            movie={movieDetails}
            onBack={handleBackToHome}
            isInWatchlist={isInWatchlist}
            onAddToWatchlist={addToWatchlist}
            onRemoveFromWatchlist={removeFromWatchlist}
            onMovieClick={fetchMovieDetails}
          />
        )}
        
        {currentPage === 'watchlist' && (
          <WatchlistPage 
            watchlist={watchlist}
            onMovieClick={fetchMovieDetails}
            onBack={handleBackToHome}
            onDiscoverMovies={handleBackToHome}
          />
        )}
      </main>
    </div>
  );
};

export default App;