import { SET_MOVIES } from "../actionConstants";

const initialState = {
  banner: [],
  nowPlaying: [],
  trending: [],
  topRated: [],
  upcoming: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      const newState = {
        banner: action.data[0].data.results,
        nowPlaying: action.data[1].data.results,
        trending: action.data[2].data.results,
        topRated: action.data[3].data.results,
        upcoming: action.data[4].data.results,
      };

      state = { ...newState };
      return state;
    default:
      return state;
  }
};
