import { API_KEY, BASE_URL } from '../utils/constants';

class TMDBApi {
  async fetchData(endpoint, params = {}) {
    try {
      const url = new URL(`${BASE_URL}${endpoint}`);
      url.searchParams.append('api_key', API_KEY);
      
      // Add additional parameters
      Object.keys(params).forEach(key => {
        url.searchParams.append(key, params[key]);
      });

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API fetch error:', error);
      throw error;
    }
  }

  async searchMovies(query) {
    return this.fetchData('/search/movie', { query: query.trim() });
  }

  async getTrendingMovies() {
    return this.fetchData('/trending/movie/day');
  }

  async getPopularMovies() {
    return this.fetchData('/movie/popular');
  }

  async getMovieDetails(id) {
    try {
      const [details, credits, videos, similar] = await Promise.all([
        this.fetchData(`/movie/${id}`),
        this.fetchData(`/movie/${id}/credits`),
        this.fetchData(`/movie/${id}/videos`),
        this.fetchData(`/movie/${id}/similar`)
      ]);

      return {
        ...details,
        cast: credits.cast?.slice(0, 6) || [],
        trailer: videos.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube'),
        similar: similar.results?.slice(0, 6) || []
      };
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }
}

export const tmdbApi = new TMDBApi();