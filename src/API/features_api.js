import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export default {
  getSearchResults: (searchQuery, pageNum) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${pageNum}`),

  getBannerMovies: () => axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`),

  getTypesOfMovies: (url) => axios.get(`${BASE_URL}${url}?api_key=${API_KEY}`),

  getMovieData: (id) => axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`),
};
