import React, { useEffect } from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Components/Navbar/Navbar.jsx";
import HashLoader from "./Components/Loaders/HashLoader.jsx";
import Auth from "./Components/Auth/Auth";
import Footer from "./Components/Footer/Footer.jsx";
import NotFound from "./Components/NotFound/404";

import LiveSearch from "./Containers/LiveSearch/LiveSearch.jsx";
import HomePage from "./Containers/HomePage/HomePage.jsx";
import Movie from "./Containers/Movie/Movie.jsx";
import Profile from "./Containers/Profile/profile.jsx";

import { getCurrentSearchData } from "./redux/actionCreators/currentSearch";
import { getMovies } from "./redux/actionCreators/homepage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Watchlist from "./Containers/Watchlist/Watchlist.jsx";

const App = ({ state, getAllMovies, handleLiveSearch }) => {
  const handleSearch = (event) => {
    handleLiveSearch(encodeURI(event.target.value), 1);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <HashRouter>
      <div className="App" id="##">
        <Navbar handleSearch={handleSearch} />
        {state.isLoading ? (
          <HashLoader color={"#daa520"} loading={state.isLoading} size={100} />
        ) : (
          <>
            {state.toRedirect ? <Redirect to="/" /> : null}
            <Switch>
              <Route path="/" exact>
                {state.search.curr_search ? <LiveSearch /> : <HomePage />}
              </Route>
              <Route path="/movie/:id" component={Movie} />
              <Route path="/auth" component={Auth} />
              <Route path="/profile" component={Profile} />
              <Route path="/watchlist" component={Watchlist} />
              <Route component={NotFound} />
            </Switch>
            {!state.isLoading && !state.isMovieLoading && !state.isSearchLoading ? <Footer /> : null}
          </>
        )}
      </div>
    </HashRouter>
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
