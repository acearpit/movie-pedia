import axios from "axios";

// const BASE_URL = "https://movie-pedia-backend.herokuapp.com";
const BASE_URL = "http://localhost:5000";

export default {
  authorise: (isLogin, data) => {
    let api_endpoint;
    if (isLogin) api_endpoint = `${BASE_URL}/login`;
    else api_endpoint = `${BASE_URL}/signup`;
    return axios.post(api_endpoint, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
  updateProfile: (token, data) =>
    axios.put(`${BASE_URL}/update`, data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteProfile: (token) =>
    axios.delete(`${BASE_URL}/delete`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    }),
};
