import "./HomePage.css";

import React, { useEffect, useState } from "react";

import Banner from "../../Components/HomePage/Banner/Banner.jsx";
import Row from "../../Components/HomePage/Row/Row.jsx";
import HashLoader from "../../Components/Loaders/HashLoader.jsx";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return loading ? (
    <HashLoader color={"#daa520"} loading={loading} size={100} />
  ) : (
    <div className="Home">
      <Banner />
      <Row movie_type={"/movie/now_playing"} type="Now Playing" />
      <Row movie_type={"/trending/movie/week"} type="Trending" />
      <Row movie_type={"/movie/top_rated"} type="Top Rated" />
      <Row movie_type={"/movie/upcoming"} type="Upcoming" />
    </div>
  );
};

export default HomePage;
