import "./HomePage.css";

import React, { Component } from "react";

import Banner from "../../Components/HomePage/Banner/Banner.jsx";
import Row from "../../Components/HomePage/Row/Row.jsx";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Banner />
        <Row movie_type={"/movie/now_playing"} type="Now Playing" />
        <Row movie_type={"/trending/movie/week"} type="Trending" />
        <Row movie_type={"/movie/top_rated"} type="Top Rated" />
        <Row movie_type={"/movie/upcoming"} type="Upcoming" />
      </div>
    );
  }
}

export default HomePage;
