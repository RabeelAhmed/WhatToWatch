import { useState, useCallback, useEffect } from 'react';

const WATCHLIST_KEY = 'whattowatch_watchlist';

export const useWatchlist = () => {
  // ✅ Initialize directly from localStorage
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const savedWatchlist = localStorage.getItem(WATCHLIST_KEY);
      return savedWatchlist ? JSON.parse(savedWatchlist) : [];
    } catch (error) {
      console.error('❌ Error parsing watchlist from localStorage:', error);
      return [];
    }
  });

  // Save to localStorage whenever watchlist changes
  useEffect(() => {
    try {
      localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
      // console.log('💾 Watchlist saved:', watchlist);
    } catch (error) {
      console.error('❌ Error saving watchlist:', error);
    }
  }, [watchlist]);

  const addToWatchlist = useCallback((movie) => {
    setWatchlist(prev => {
      if (prev.find(m => m.id === movie.id)) {
        return prev; // already exists
      }
      return [...prev, movie];
    });
  }, []);

  const removeFromWatchlist = useCallback((movieId) => {
    setWatchlist(prev => prev.filter(m => m.id !== movieId));
  }, []);

  const isInWatchlist = useCallback(
    (movieId) => watchlist.some(m => m.id === movieId),
    [watchlist]
  );

  const clearWatchlist = useCallback(() => {
    setWatchlist([]);
    try {
      localStorage.removeItem(WATCHLIST_KEY);
    } catch (error) {
      console.error('❌ Error clearing watchlist:', error);
    }
  }, []);

  return {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    clearWatchlist,
    watchlistCount: watchlist.length
  };
};
