import "./Row.css";

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import HashLoader from "../../Loaders/HashLoader.jsx";
import Auxiliary from "../../../hoc/Auxiliary.jsx";

class Row extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  };

  getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3${this.props.movie_type}?api_key=${this.state.API_KEY}`
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          movies: res.data.results,
        });
      })
      .catch((err) => {
        console.log(
          "Error in fetching movie rows!",
          this.props.movie_type,
          err
        );
      });
  };

  buildRow = () => {
    const updatedArr = this.state.movies;
    return (
      <Auxiliary>
        <h1 className="movie_type text-left pl-2">{this.props.type}</h1>
        <div className="container-fluid rows">
          {updatedArr.map((movie) => {
            return (
              <div className="row_movie" key={movie.id}>
                <div className="image_cont">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    className="row_IMG"
                  />
                </div>
                <div className="more_info">
                  <Link to={`/movie-pedia/movie/${movie.id}`}>
                    <button className="more_details">More Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Auxiliary>
    );
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Auxiliary>
        {this.state.isLoading ? (
          <HashLoader
            color={"#daa520"}
            loading={this.state.isLoading}
            size={100}
          />
        ) : (
          this.buildRow()
        )}
      </Auxiliary>
    );
  }
}

export default Row;
