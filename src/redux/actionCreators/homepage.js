import { GET_MOVIES, SET_MOVIES } from "../actionConstants";

export const getMovies = () => {
  return {
    type: GET_MOVIES,
  };
};

export const setMovies = (data) => {
  return {
    type: SET_MOVIES,
    data,
  };
};
