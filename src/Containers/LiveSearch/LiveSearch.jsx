import "./LiveSearch.css";

import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import Auxiliary from "../../hoc/Auxiliary.jsx";
import HashLoader from "../../Components/Loaders/HashLoader.jsx";

const LiveSearch = ({ search }) => {
  const [state, setState] = useState({
    isLoading: false,
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
    search,
  });

  const handlePaginationSearch = (toSearch, page) => {
    setState({ ...state, isLoading: true });
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${state.API_KEY}&query=${toSearch}&page=${page}`)
      .then((res) => {
        setTimeout(() => {
          setState({
            ...state,
            isLoading: false,
            search: {
              ...state.search,
              movies: res.data.results,
              curr_page: page,
              totPages: res.data.total_pages,
              curr_search: toSearch,
            },
          });
        }, 200);
      })
      .catch((err) => console.log(err));
  };

  const prevHandler = () => {
    handlePaginationSearch(state.search.curr_search, state.search.curr_page - 1);
  };

  const nextHandler = () => {
    handlePaginationSearch(state.search.curr_search, state.search.curr_page + 1);
  };

  const renderSearchResults = (res) => {
    let pagination = null;

    if (state.search.totPages > 1) {
      if (state.search.curr_page === 1) {
        // only next button
        pagination = (
          <button type="submit" className="next" onClick={nextHandler}>
            NEXT
          </button>
        );
      } else if (state.search.curr_page === state.search.totPages) {
        // only prev button
        pagination = (
          <button type="submit" className="prev" onClick={prevHandler}>
            PREV
          </button>
        );
      } else {
        // both prev and next buttons
        pagination = (
          <Auxiliary>
            <button type="submit" className="prev" onClick={prevHandler}>
              PREV
            </button>
            <button type="submit" className="next" onClick={nextHandler}>
              NEXT
            </button>
          </Auxiliary>
        );
      }
    }

    return (
      <Container className="resultsContainer">
        <Row className="next_prev">{pagination}</Row>
        <Row className="ROW">
          {res.movies.map((movie) => {
            let image_path;

            if (!movie.backdrop_path) image_path = "https://www.warnersstellian.com/Content/images/product_image_not_available.png";
            else image_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

            return (
              <Col md="3.5" className="movie" key={movie.id}>
                <div className="img_container">
                  <img src={image_path} alt={movie.original_title} className="image" />
                  <button type="submit" className="more_details">
                    <Link
                      to={`/movie-pedia/movie/${movie.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}>
                      More Details
                    </Link>
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="next_prev">{pagination}</Row>
      </Container>
    );
  };

  return state.isLoading ? <HashLoader color={"#daa520"} loading={state.isLoading} size={100} /> : renderSearchResults(state.search);
};

export default withRouter(LiveSearch);
