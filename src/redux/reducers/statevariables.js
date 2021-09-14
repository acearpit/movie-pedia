import { SET_STATE_VARIABLE } from "../actionConstants";

const initialState = {
  homepageLoading: false,
  homepageError: false,
  searchLoading: false,
  searchError: false,
  movieLoading: false,
  movieError: false,
  redirect: false,
  authLoading: false,
  authSuccess: false,
  authError: "",
  updateSuccess: false,
  updateLoading: false,
  updateError: "",
  deleteSuccess: false,
  deleteLoading: false,
  deleteError: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE_VARIABLE:
      state = {
        ...state,
        [action.svType]: action.val,
      };
      return state;
    default:
      return state;
  }
};
