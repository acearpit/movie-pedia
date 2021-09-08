import { SET_CURRENT_SEARCH_DATA } from "../actionConstants";

const initialState = {
  movies: [],
  currPage: 0,
  totPages: 0,
  curr_search: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SEARCH_DATA:
      state = { ...action.data };
      return state;
    default:
      return state;
  }
};
