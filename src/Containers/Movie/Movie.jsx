import "./Movie.css";

import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

import HashLoader from "../../Components/Loaders/HashLoader.jsx";
import { connect } from "react-redux";
import { getCurrentMovieData } from "../../redux/actionCreators/currentMovie";

const Movie = ({ match, state, getCurrentMovie }) => {
  useEffect(() => {
    getCurrentMovie(+match.params.id);
  }, []);

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

  let image_path = null;
  let data = null;
  let tagline = null;

  if (state.movie_data) {
    data = state.movie_data;
    tagline = data.tagline ? data.tagline : "No wind favors s/he who has no destined port...";
    image_path = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  }

  return !state.movie_data || (state.movie_data && state.movie_data.id !== +match.params.id) ? (
    <HashLoader color={"#daa520"} loading={state.loading} size={100} />
  ) : (
    <div className="container Movie">
      <div className="row main_row">
        <div className="col-xs-12 col-md-4 image_container" style={{ background: `url(${image_path})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
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

const mapStateToProps = (globalState) => {
  return {
    state: {
      isLoading: globalState.stateVariables.movieLoading,
      movie_data: globalState.movieData.movieData,
      searchQuery: globalState.currentSearch.curr_search,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentMovie: (id) => dispatch(getCurrentMovieData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie));
