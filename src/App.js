import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Containers/HomePage/HomePage";
import LiveSearch from "./Containers/LiveSearch/LiveSearch";
import HashLoader from "./Components/Loaders/HashLoader";
import Movie from "./Containers/Movie/Movie";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  state = {
    toRedirect: false,
    isLoading: false,
    search: {
      movies: [],
      currPage: 0,
      totPages: 0,
      curr_search: null,
    },
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  };

  handleSearch = (event) => {
    if (event.target.value !== "") {
      let searchQuery = encodeURI(event.target.value);
      this.setState({ isLoading: true });
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            this.state.API_KEY
          }&query=${searchQuery}&page=${1}`
        )
        .then((res) => {
          //   console.log(res);
          setTimeout(() => {
            this.setState({
              isLoading: false,
              search: {
                movies: res.data.results,
                curr_page: 1,
                totPages: res.data.total_pages,
                curr_search: searchQuery,
              },
            });
          }, 200);
        })
        .catch((err) => {
          console.log(
            "Error in API movie fetch call for the first time!!",
            err
          );
        });
    } else {
      this.setState({
        isLoading: false,
        search: {
          movies: [],
          currPage: 0,
          totPages: 0,
          curr_search: null,
        },
      });
    }
    // console.log(event);
    if (event.keyCode === 13) {
      this.setState({ toRedirect: true });
    }
  };

  funcCall = () => {
    // console.log("I am here!");
    this.setState({ toRedirect: false });
    return <Redirect to="/" />;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App" id="##">
          <Navbar handleSearch={this.handleSearch} />
          {this.state.toRedirect ? this.funcCall() : <></>}
          <Switch>
            <Route path="/" exact>
              {this.state.isLoading ? (
                <HashLoader
                  color={"#daa520"}
                  loading={this.state.isLoading}
                  size={100}
                />
              ) : this.state.search.curr_search ? (
                <LiveSearch search={this.state.search} />
              ) : (
                <HomePage />
              )}
            </Route>
            <Route path="/movie/:id" component={Movie} />
          </Switch>
          {this.state.isLoading ? null : <Footer />}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
