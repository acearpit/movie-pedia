import { GET_CURRENT_SEARCH_DATA, SET_CURRENT_SEARCH_DATA } from "../actionConstants";

export const getCurrentSearchData = (searchQuery, pageNum) => {
  return {
    type: GET_CURRENT_SEARCH_DATA,
    searchQuery,
    pageNum,
  };
};

export const setCurrentSearchData = (data) => {
  return {
    type: SET_CURRENT_SEARCH_DATA,
    data,
  };
};
