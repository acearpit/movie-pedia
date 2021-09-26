import axios from "axios";

const BASE_URL = "https://movie-pedia-backend.herokuapp.com";

export default {
  authorise: (isLogin, data) => {
    let api_endpoint;
    if (isLogin) api_endpoint = `${BASE_URL}/login`;
    else api_endpoint = `${BASE_URL}/signup`;
    return axios.post(api_endpoint, data);
  },
  updateProfile: (token, data) =>
    axios.post(`${BASE_URL}/update`, data, {
      headers: {
        ...axios.defaults.headers,
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteProfile: (token) =>
    axios.delete(`${BASE_URL}/delete`, {
      headers: {
        ...axios.defaults.headers,
        Authorization: `Bearer ${token}`,
      },
    }),
  addToWatchlist: (token, data) =>
    axios.post(`${BASE_URL}/addtowatchlist`, data, {
      headers: {
        ...axios.defaults.headers,
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteFromWatchlist: (token, data) =>
    axios.post(`${BASE_URL}/deletefromwatchlist`, data, {
      headers: {
        ...axios.defaults.headers,
        Authorization: `Bearer ${token}`,
      },
    }),
};
