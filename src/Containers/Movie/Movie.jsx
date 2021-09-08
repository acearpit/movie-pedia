import "./Movie.css";

import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import HashLoader from "../../Components/Loaders/HashLoader.jsx";
import Auxiliary from "../../hoc/Auxiliary.jsx";

const Movie = ({ match }) => {
  const [state, setState] = useState({
    isLoading: true,
    movie_data: {},
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  });

  const fetchMovieDetails = (id) => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${state.API_KEY}&language=en-US`)
      .then((res) => {
        setTimeout(() => {
          setState({
            ...state,
            isLoading: false,
            movie_data: res.data,
          });
        }, 500);
      })
      .catch((err) => {
        console.log("Error in fetching movie details!", err);
      });
  };

  const readyData = (arr) => {
    const updated = arr.map((entry) => entry.name);
    return updated.join(", ");
  };

  const readyRevenue = (num) => {
    var str = num.toString();
    var res = "";
    let idx = str.length;
    while (idx > 3) {
      idx -= 3;
      var sub_str = str.substr(idx, 3);
      res = "," + sub_str + res;
    }
    res = str.substr(0, idx) + res;
    return res;
  };

  let image_path = null,
    data,
    tagline;

  if (state.isLoading) fetchMovieDetails(match.params.id);
  else {
    data = state.movie_data;
    tagline = data.tagline ? data.tagline : "No wind favors s/he who has no destined port...";
    image_path = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  }

  return state.isLoading ? (
    <HashLoader color={"#daa520"} loading={state.isLoading} size={100} />
  ) : (
    <div className="container Movie">
      <div className="row main_row">
        <div className="col-xs-12 col-md-4 image_container">
          <img src={image_path} className="img-fluid IMG" />
        </div>
        <div className="col-xs-12 col-md-8 movie_data_container">
          <h1 className="title">{data.original_title}</h1>
          <h5 className="tagline">{tagline}</h5>
          <p className="overview">{data.overview}</p>
          <h5 className="genres_title"> GENRES: </h5>
          <h5 className="genres"> {readyData(data.genres)} </h5>
          <h5 className="prod_companies_title">PRODUCTION COMPANIES:</h5>
          <h5 className="prod_companies">{readyData(data.production_companies)}</h5>
          <div className="container fluid m-0 p-0 mini_cont">
            <div className="row mini_cont_row">
              <div className="col col-xs-6">
                <h5 className="genres_title"> RELEASE DATE: </h5>
                <h5 className="genres">{data.release_date}</h5>
              </div>
              <div className="col col-xs-6">
                <h5 className="genres_title"> REVENUE: </h5>
                <h5 className="genres">${data.revenue !== 0 ? readyRevenue(data.revenue) : 1000000}</h5>
              </div>
            </div>
            <div className="row mini_cont_row">
              <div className="col col-xs-6">
                <h5 className="genres_title"> RUNNING TIME: </h5>
                <h5 className="genres">{data.runtime} MINS</h5>
              </div>
              <div className="col col-xs-6">
                <h5 className="genres_title"> IMDB RATING: </h5>
                <h5 className="genres">
                  {data.vote_average}/10 <span className="vote_cnt">({readyRevenue(data.vote_count)})</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Movie);
