import { RATING_THRESHOLDS, VERDICT_CONFIG } from './constants';

export const getWorthItVerdict = (rating) => {
  if (rating >= RATING_THRESHOLDS.MUST_WATCH) return VERDICT_CONFIG.MUST_WATCH;
  if (rating >= RATING_THRESHOLDS.WORTH_WATCHING) return VERDICT_CONFIG.WORTH_WATCHING;
  if (rating >= RATING_THRESHOLDS.MIXED) return VERDICT_CONFIG.MIXED;
  return VERDICT_CONFIG.SKIP;
};

export const formatRuntime = (minutes) => {
  if (!minutes) return 'N/A';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export const formatReleaseDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).getFullYear();
};

export const getImageUrl = (path, size = 'w500') => {
  if (!path) return '/api/placeholder/300/450';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};