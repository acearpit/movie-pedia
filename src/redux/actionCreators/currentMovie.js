import { GET_CURRENT_MOVIE_DATA, SET_CURRENT_MOVIE_DATA } from "../actionConstants";

export const getCurrentMovieData = (id) => {
  return {
    type: GET_CURRENT_MOVIE_DATA,
    id,
  };
};

export const setCurrentMovieData = (data) => {
  return {
    type: SET_CURRENT_MOVIE_DATA,
    data,
  };
};
