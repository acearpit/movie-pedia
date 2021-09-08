import "./Row.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Auxiliary from "../../../hoc/Auxiliary.jsx";

const Row = ({ type, movie_type }) => {
  const [state, setState] = useState({
    isLoading: true,
    movies: [],
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  });

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3${movie_type}?api_key=${state.API_KEY}`)
      .then((res) => {
        setState({
          ...state,
          isLoading: false,
          movies: res.data.results,
        });
      })
      .catch((err) => {
        console.log("Error in fetching movie rows!", movie_type, err);
      });
  };

  const buildRow = () => {
    const updatedArr = state.movies;
    return (
      <Auxiliary>
        <h1 className="movie_type text-left pl-2">{type}</h1>
        <div className="container-fluid rows">
          {updatedArr.map((movie) => {
            return (
              <div className="row_movie" key={movie.id}>
                <div className="image_cont">
                  <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="row_IMG" />
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

  useEffect(() => {
    getMovies();
  }, []);

  return !state.isLoading ? buildRow() : null;
};

export default Row;
