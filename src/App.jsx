import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Components/Navbar/Navbar.jsx";
import HashLoader from "./Components/Loaders/HashLoader.jsx";
import Auth from "./Components/Auth/Auth";
import Footer from "./Components/Footer/Footer.jsx";

import LiveSearch from "./Containers/LiveSearch/LiveSearch.jsx";
import HomePage from "./Containers/HomePage/HomePage.jsx";
import Movie from "./Containers/Movie/Movie.jsx";

import { getCurrentSearchData } from "./redux/actionCreators/currentSearch";
import { getMovies } from "./redux/actionCreators/homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = ({ state, getAllMovies, handleLiveSearch }) => {
  const handleSearch = (event) => {
    handleLiveSearch(encodeURI(event.target.value), 1);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <BrowserRouter>
      <div className="App" id="##">
        <Navbar handleSearch={handleSearch} />
        {state.isLoading ? (
          <HashLoader color={"#daa520"} loading={state.isLoading} size={100} />
        ) : (
          <>
            {state.toRedirect ? <Redirect to="/movie-pedia" /> : null}
            <Switch>
              <Route path="/movie-pedia" exact>
                {state.search.curr_search ? <LiveSearch /> : <HomePage />}
              </Route>
              <Route path="/movie-pedia/movie/:id" component={Movie} />
              <Route path="/movie-pedia/auth" component={Auth} />
            </Switch>
            {!state.isLoading && !state.isMovieLoading && !state.isSearchLoading ? <Footer /> : null}
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (globalState) => {
  return {
    state: {
      isLoading: globalState.stateVariables.homepageLoading,
      isSearchLoading: globalState.stateVariables.searchLoading,
      isMovieLoading: globalState.stateVariables.movieLoading,
      toRedirect: globalState.stateVariables.redirect,
      search: globalState.currentSearch,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovies: () => dispatch(getMovies()),
    handleLiveSearch: (searchQuery, pageNum) => dispatch(getCurrentSearchData(searchQuery, pageNum)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);