import { AUTHORISE_USER, GET_CURRENT_USER_DATA, LOGOUT, SET_CURRENT_USER_DATA, UPDATE_USER, DELETE_USER, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from "../actionConstants";

export const authoriseUser = (isLogin, data) => {
  return {
    type: AUTHORISE_USER,
    isLogin,
    data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getCurrentUserData = (id) => {
  return {
    type: GET_CURRENT_USER_DATA,
    id,
  };
};

export const setCurrentUserData = (data) => {
  return {
    type: SET_CURRENT_USER_DATA,
    data,
  };
};

export const updateCurrentUserData = (token, data) => {
  return {
    type: UPDATE_USER,
    token,
    data,
  };
};

export const addToWatchlist = (token, data) => {
  return {
    type: ADD_TO_WATCHLIST,
    token,
    data,
  };
};

export const removeFromWatchlist = (token, id) => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    token,
    id,
  };
};

export const deleteUser = (token) => {
  return {
    type: DELETE_USER,
    token,
  };
};
