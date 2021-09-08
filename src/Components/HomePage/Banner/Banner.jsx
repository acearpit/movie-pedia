import "./Banner.css";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import HashLoader from "../../Loaders/HashLoader.jsx";
import Auxiliary from "../../../hoc/Auxiliary.jsx";

const Banner = () => {
  const [state, setState] = useState({
    isLoading: true,
    cntr: 0,
    movies: [],
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  });

  const getPopularMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${state.API_KEY}&language=en-US&page=1`)
      .then((res) => {
        const arr = res.data.results;
        setTimeout(() => {
          setState({
            ...state,
            cntr: 1,
            isLoading: false,
            movies: arr,
          });
        }, 1000);
      })
      .catch((err) => {
        console.log("Error in fetching popular movies!", err);
      });
  };

  const buildBanner = () => {
    const updatedArr = state.movies.slice(0, 5);
    return (
      <Auxiliary>
        <div id="banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {updatedArr.map((movie, idx) => {
              return (
                <div key={movie.id} className={idx === 0 ? "carousel-item active" : "carousel-item"}>
                  <div className="IMAGE_CONTAINER">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="IMAGE" alt={movie.original_title} />
                  </div>
                  <div className="carousel-caption d-block">
                    <h5 className="caption">{movie.original_title}</h5>
                    <Link to={`/movie-pedia/movie/${movie.id}`} style={{ textDecoration: "none" }}>
                      <button className="btn btn-md more_INFO">MORE INFO</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <a className="carousel-control-prev" href="#banner" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </a>
          <a className="carousel-control-next" href="#banner" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </a>
        </div>
      </Auxiliary>
    );
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return <Auxiliary>{state.isLoading ? <HashLoader color={"#daa520"} loading={state.isLoading} size={100} /> : buildBanner()}</Auxiliary>;
};

export default Banner;
