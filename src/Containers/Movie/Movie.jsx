import "./Movie.css";

import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import HashLoader from "../../Components/Loaders/HashLoader.jsx";
import Auxiliary from "../../hoc/Auxiliary.jsx";

class Movie extends Component {
  state = {
    isLoading: true,
    movie_data: {},
    API_KEY: "3e4103174dec93f06df85aeacabc112c",
  };

  fetchMovieDetails = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${this.state.API_KEY}&language=en-US`
      )
      .then((res) => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            movie_data: res.data,
          });
        }, 500);
      })
      .catch((err) => {
        console.log("Error in fetching movie details!", err);
      });
  };

  readyData = (arr) => {
    const updated = arr.map((entry) => entry.name);
    return updated.join(", ");
  };

  readyRevenue = (num) => {
    var str = num.toString();
    var res = "";
    let idx = str.length;
    while (idx > 3) {
      idx -= 3;
      var sub_str = str.substr(idx, 3);
      res = "," + sub_str + res;
    }
    res = str.substr(0, idx) + res;
    return res;
  };

  render() {
    let image_path = null,
      data,
      tagline;
    if (this.state.isLoading)
      this.fetchMovieDetails(this.props.match.params.id);
    else {
      data = this.state.movie_data;
      tagline = data.tagline
        ? data.tagline
        : "No wind favors s/he who has no destined port...";
      image_path = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
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
          <div className="container Movie">
            <div className="row main_row">
              <div className="col-xs-12 col-md-4 image_container">
                <img src={image_path} className="img-fluid IMG" />
              </div>
              <div className="col-xs-12 col-md-8 movie_data_container">
                <h1 className="title">{data.original_title}</h1>
                <h5 className="tagline">{tagline}</h5>
                <p className="overview">{data.overview}</p>
                <h5 className="genres_title"> GENRES: </h5>
                <h5 className="genres"> {this.readyData(data.genres)} </h5>
                <h5 className="prod_companies_title">PRODUCTION COMPANIES:</h5>
                <h5 className="prod_companies">
                  {this.readyData(data.production_companies)}
                </h5>
                <div className="container fluid m-0 p-0 mini_cont">
                  <div className="row mini_cont_row">
                    <div className="col col-xs-6">
                      <h5 className="genres_title"> RELEASE DATE: </h5>
                      <h5 className="genres">{data.release_date}</h5>
                    </div>
                    <div className="col col-xs-6">
                      <h5 className="genres_title"> REVENUE: </h5>
                      <h5 className="genres">
                        $
                        {data.revenue !== 0
                          ? this.readyRevenue(data.revenue)
                          : 1000000}
                      </h5>
                    </div>
                  </div>
                  <div className="row mini_cont_row">
                    <div className="col col-xs-6">
                      <h5 className="genres_title"> RUNNING TIME: </h5>
                      <h5 className="genres">{data.runtime} MINS</h5>
                    </div>
                    <div className="col col-xs-6">
                      <h5 className="genres_title"> IMDB RATING: </h5>
                      <h5 className="genres">
                        {data.vote_average}/10{" "}
                        <span className="vote_cnt">
                          ({this.readyRevenue(data.vote_count)})
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Auxiliary>
    );
  }
}

export default withRouter(Movie);
