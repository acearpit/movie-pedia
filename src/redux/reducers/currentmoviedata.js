import { SET_CURRENT_MOVIE_ID, SET_CURRENT_MOVIE_DATA } from "../actionConstants";

const initialState = {
  movieData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MOVIE_DATA:
      state = {
        ...state,
        movieData: action.data,
      };
      return state;
    default:
      return state;
  }
};
