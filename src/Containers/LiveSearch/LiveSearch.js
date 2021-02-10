import "./LiveSearch.css";

import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

import Auxiliary from "../../hoc/Auxiliary";
import HashLoader from "../../Components/Loaders/HashLoader";

class LiveSearch extends Component {
  state = {
    isLoading: false,
    search: this.props.search,
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  };

  handlePaginationSearch = (toSearch, page) => {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.state.API_KEY}&query=${toSearch}&page=${page}`
      )
      .then((res) => {
        //   console.log(res);
        setTimeout(() => {
          // if (document.getElementById("searchBar"))
          //   document.getElementById("searchBar").value = null;
          this.setState({
            isLoading: false,
            search: {
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

  prevHandler = () => {
    this.handlePaginationSearch(
      this.state.search.curr_search,
      this.state.search.curr_page - 1
    );
  };

  nextHandler = () => {
    this.handlePaginationSearch(
      this.state.search.curr_search,
      this.state.search.curr_page + 1
    );
  };

  renderSearchResults = (res) => {
    let pagination = null;
    if (this.state.search.totPages > 1) {
      if (this.state.search.curr_page === 1) {
        // only next button
        pagination = (
          <Auxiliary>
            <button type="submit" className="next" onClick={this.nextHandler}>
              NEXT
            </button>
          </Auxiliary>
        );
      } else if (this.state.search.curr_page === this.state.search.totPages) {
        // only prev button
        pagination = (
          <Auxiliary>
            <button type="submit" className="prev" onClick={this.prevHandler}>
              PREV
            </button>
          </Auxiliary>
        );
      } else {
        // both prev and next buttons
        pagination = (
          <Auxiliary>
            <button type="submit" className="prev" onClick={this.prevHandler}>
              PREV
            </button>
            <button type="submit" className="next" onClick={this.nextHandler}>
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
            // console.log(movie);
            let image_path;
            if (!movie.backdrop_path)
              image_path =
                "https://www.warnersstellian.com/Content/images/product_image_not_available.png";
            else
              image_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
            return (
              <Col md="3.5" className="movie" key={movie.id}>
                <div className="img_container">
                  <img
                    src={image_path}
                    alt={movie.original_title}
                    className="image"
                  />
                  <button type="submit" className="more_details">
                    <Link
                      to={`/movie-pedia/movie/${movie.id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
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

  render() {
    let Render = null;
    if (!this.state.isLoading && this.state.search.movies.length > 0) {
      Render = this.renderSearchResults(this.state.search);
    }
    return (
      <Auxiliary>
        {this.state.isLoading ? (
          <HashLoader
            color={"#daa520"}
            loading={this.state.isLoading}
            size={100}
          />
        ) : (
          Render
        )}
      </Auxiliary>
    );
  }
}

export default withRouter(LiveSearch);
