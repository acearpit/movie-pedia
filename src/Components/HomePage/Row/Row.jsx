import "./Row.css";

import React from "react";
import { Link } from "react-router-dom";

import Auxiliary from "../../../hoc/Auxiliary.jsx";

const Row = ({ type, movies }) => {
  return (
    <Auxiliary>
      <h1 className="movie_type text-left pl-2">{type}</h1>
      <div className="container-fluid rows">
        {movies.map((movie) => {
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

export default Row;
