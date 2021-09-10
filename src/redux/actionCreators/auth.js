import { AUTHORISE_USER, GET_CURRENT_USER_DATA, LOGOUT, SET_CURRENT_USER_DATA } from "../actionConstants";

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
