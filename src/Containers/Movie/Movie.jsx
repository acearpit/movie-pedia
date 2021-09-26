import "./Movie.css";

import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import HashLoader from "../../Components/Loaders/HashLoader.jsx";
import ClockLoader from "../../Components/Loaders/ClockLoader.jsx";
import { connect } from "react-redux";
import { getCurrentMovieData } from "../../redux/actionCreators/currentMovie";
import { addToWatchlist, removeFromWatchlist } from "../../redux/actionCreators/auth";

const Movie = ({ match, state, getCurrentMovie, addMovie, deleteMovie }) => {
  useEffect(() => {
    getCurrentMovie(+match.params.id);
  }, []);

  const [inWatchlist, setInWatchlist] = useState(false);

  useEffect(() => {
    if (state.user.watchlist) {
      const idx = state.user.watchlist.findIndex((movie) => movie.id === +match.params.id);
      if (idx !== -1) setInWatchlist(true);
      else setInWatchlist(false);
    }
  }, [state.user.watchlist]);

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

  const history = useHistory();

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
        <div
          className="col-xs-12 col-md-4 image_container"
          style={{
            background: `url(${image_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
          }}
        />
        <div className="col-xs-12 col-md-8 movie_data_container">
          <h1 className="title">{data.original_title}</h1>
          {!state.user || !state.user.token ? (
            <button
              className="watchlist green"
              onClick={(e) => {
                e.preventDefault();
                history.push("/auth");
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="plus_symbol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add to watchlist
            </button>
          ) : !inWatchlist ? (
            <button
              className="watchlist green"
              onClick={(e) => {
                e.preventDefault();
                addMovie(state.user.token, state.movie_data);
              }}>
              {!state.isAddedLoading ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="plus_symbol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add to watchlist
                </>
              ) : (
                <ClockLoader size={25} color="white" loading={true} />
              )}
            </button>
          ) : (
            <>
              <button
                className="watchlist red"
                onClick={(e) => {
                  e.preventDefault();
                  deleteMovie(state.user.token, +match.params.id);
                }}>
                {!state.isAddedLoading ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="plus_symbol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Remove from watchlist
                  </>
                ) : (
                  <ClockLoader size={25} color="white" loading={true} />
                )}
              </button>
              <button
                className="watchlist green"
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/watchlist");
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="plus_symbol" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                View watchlist
              </button>
            </>
          )}
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
      isAddedLoading: globalState.stateVariables.addToWatchlistLoading,
      movie_data: globalState.movieData.movieData,
      searchQuery: globalState.currentSearch.curr_search,
      user: globalState.auth,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentMovie: (id) => dispatch(getCurrentMovieData(id)),
    addMovie: (token, data) => dispatch(addToWatchlist(token, data)),
    deleteMovie: (token, id) => dispatch(removeFromWatchlist(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie));
