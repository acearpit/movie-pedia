import { SET_CURRENT_USER_DATA, LOGOUT } from "../actionConstants";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  _id: "",
  watchlist: [],
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_DATA:
      delete action.data["password"];
      state = {
        ...action.data,
      };
      return state;
    case LOGOUT:
      state = {
        first_name: "",
        last_name: "",
        email: "",
        _id: "",
        watchlist: [],
        token: "",
      };
      return state;
    default:
      return state;
  }
};
