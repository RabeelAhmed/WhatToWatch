export const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'a237b75208cbf2753aabcb67d32a4010';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
export const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

export const RATING_THRESHOLDS = {
  MUST_WATCH: 7.5,
  WORTH_WATCHING: 7.0,
  MIXED: 6.0
};

export const VERDICT_CONFIG = {
  MUST_WATCH: {
    text: 'Must Watch',
    emoji: '⭐',
    color: 'from-green-500 to-emerald-500'
  },
  WORTH_WATCHING: {
    text: 'Worth Watching',
    emoji: '👍',
    color: 'from-blue-500 to-cyan-500'
  },
  MIXED: {
    text: 'Mixed',
    emoji: '🤔',
    color: 'from-yellow-500 to-orange-500'
  },
  SKIP: {
    text: 'Skip',
    emoji: '❌',
    color: 'from-red-500 to-pink-500'
  }
};