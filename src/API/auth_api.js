import axios from "axios";

const BASE_URL = "https://movie-pedia-backend.herokuapp.com";
// const BASE_URL = "http://localhost:5000";

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
};
