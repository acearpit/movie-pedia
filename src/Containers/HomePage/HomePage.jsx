import "./HomePage.css";

import React from "react";

import Banner from "../../Components/HomePage/Banner/Banner.jsx";
import Row from "../../Components/HomePage/Row/Row.jsx";
import { connect } from "react-redux";

const HomePage = ({ data }) => {
  return (
    <div className="Home">
      <Banner movies={data["banner"]} />
      <Row movies={data["nowPlaying"]} type="Now Playing" />
      <Row movies={data["trending"]} type="Trending" />
      <Row movies={data["topRated"]} type="Top Rated" />
      <Row movies={data["upcoming"]} type="Upcoming" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.homepage,
  };
};

export default connect(mapStateToProps)(HomePage);
