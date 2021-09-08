import { takeLatest, takeEvery, call, put, delay, all } from "redux-saga/effects";

import { GET_CURRENT_MOVIE_DATA, GET_CURRENT_SEARCH_DATA, GET_MOVIES } from "./actionConstants";

import { setCurrentMovieId, setCurrentMovieData } from "./actionCreators/currentMovie";
import { setCurrentSearchData } from "./actionCreators/currentSearch";
import { setMovies } from "./actionCreators/homepage";
import { setStateVariable } from "./actionCreators/stateVariables";

import features from "../API/features_api";

function* getSearchResults({ searchQuery, pageNum }) {
  try {
    if (!searchQuery || searchQuery === "") {
      const data = {
        movies: [],
        curr_page: 0,
        totPages: 0,
        curr_search: null,
      };
      yield put(setCurrentSearchData(data));

      yield put(setStateVariable("redirect", true));
      yield delay(500);
      yield put(setStateVariable("redirect", false));
    } else {
      yield put(setStateVariable("searchLoading", true));

      const fetched_data = yield call(features.getSearchResults, searchQuery, pageNum);
      const data = {
        movies: fetched_data.data.results,
        curr_page: pageNum,
        totPages: fetched_data.data.total_pages,
        curr_search: searchQuery,
      };
      yield put(setCurrentSearchData(data));

      yield put(setStateVariable("searchLoading", false));
    }
  } catch (error) {
    yield put(setStateVariable("searchError", true));
  }
}

function* getMovies() {
  try {
    yield put(setStateVariable("homepageLoading", true));

    const toFetch = ["/movie/now_playing", "/trending/movie/week", "/movie/top_rated", "/movie/upcoming"];

    const fetched_data = yield all([
      yield call(features.getBannerMovies),
      yield call(features.getTypesOfMovies, toFetch[0]),
      yield call(features.getTypesOfMovies, toFetch[1]),
      yield call(features.getTypesOfMovies, toFetch[2]),
      yield call(features.getTypesOfMovies, toFetch[3]),
    ]);
    yield put(setMovies(fetched_data));

    yield put(setStateVariable("homepageLoading", false));
  } catch (error) {
    yield put(setStateVariable("homepageError", true));
  }
}

function* getMovieData({ id }) {
  try {
    yield put(setStateVariable("movieLoading", true));

    const data = yield call(features.getMovieData, id);
    yield put(setCurrentMovieData(data.data));

    yield put(setStateVariable("movieLoading", false));
  } catch (error) {
    yield put(setStateVariable("movieError", true));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_CURRENT_SEARCH_DATA, getSearchResults);

  yield takeEvery(GET_MOVIES, getMovies);

  yield takeEvery(GET_CURRENT_MOVIE_DATA, getMovieData);
}
