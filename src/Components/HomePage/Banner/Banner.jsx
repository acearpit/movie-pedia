import "./Banner.css";

import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ movies }) => {
  return (
    <div id="banner" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, idx) => {
          return (
            <div key={movie.id} className={idx === 0 ? "carousel-item active" : "carousel-item"}>
              <div
                className="IMAGE_CONTAINER"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.35)",
                }}
              />
              <div className="carousel-caption d-block">
                <h5 className="caption">{movie.original_title}</h5>
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
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
  );
};

export default Banner;
