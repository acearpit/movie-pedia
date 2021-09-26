import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../redux/actionCreators/auth";
import "./Watchlist.css";

const Watchlist = ({ user, deleteMovie }) => {
  const history = useHistory();

  useEffect(() => {
    if (!user.token) history.push("/");
  });

  return (
    <div className="watchlist_page">
      <h3>My Watchlist</h3>
      <div className="watchlist_container">
        {user.watchlist.map((movie) => {
          return (
            <div key={movie.id} className="watchlist_movie">
              <div className="movie_image">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
              </div>
              <div className="movie_title">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </div>
              <div className="watchlist_actions">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 delete_watchlist_movie"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteMovie(user.token, movie.id);
                  }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (globalState) => {
  return {
    user: globalState.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { deleteMovie: (token, id) => dispatch(removeFromWatchlist(token, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
