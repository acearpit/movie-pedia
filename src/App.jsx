import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import HomePage from "./Containers/HomePage/HomePage.jsx";
import LiveSearch from "./Containers/LiveSearch/LiveSearch.jsx";
import HashLoader from "./Components/Loaders/HashLoader.jsx";
import Movie from "./Containers/Movie/Movie.jsx";
import Footer from "./Components/Footer/Footer.jsx";

const App = () => {
  const [state, setState] = useState({
    toRedirect: false,
    isLoading: false,
    search: {
      movies: [],
      currPage: 0,
      totPages: 0,
      curr_search: null,
    },
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  });

  const handleSearch = (event) => {
    if (event.target.value !== "") {
      let searchQuery = encodeURI(event.target.value);
      setState({ ...state, isLoading: true });

      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.API_KEY}&query=${searchQuery}&page=${1}`)
        .then((res) => {
          setState({
            ...state,
            isLoading: false,
            search: {
              movies: res.data.results,
              curr_page: 1,
              totPages: res.data.total_pages,
              curr_search: searchQuery,
            },
          });
        })
        .catch((err) => {
          console.log("Error in API movie fetch call for the first time!!", err);
        });
    } else {
      setState({
        ...state,
        isLoading: false,
        search: {
          movies: [],
          currPage: 0,
          totPages: 0,
          curr_search: null,
        },
      });
    }

    if (event.keyCode === 13)
      setState({
        ...state,
        toRedirect: true,
      });
  };

  const redirect = () => {
    setState({ ...state, toRedirect: false });
    return <Redirect to="/movie-pedia" />;
  };

  return (
    <BrowserRouter>
      <div className="App" id="##">
        <Navbar handleSearch={handleSearch} />
        {state.toRedirect ? redirect() : null}
        <Switch>
          <Route path="/movie-pedia" exact>
            {state.isLoading ? <HashLoader color={"#daa520"} loading={state.isLoading} size={100} /> : state.search.curr_search ? <LiveSearch search={state.search} /> : <HomePage />}
          </Route>
          <Route path="/movie-pedia/movie/:id" component={Movie} />
        </Switch>
        {state.isLoading ? null : <Footer />}
      </div>
    </BrowserRouter>
  );
};

export default App;
