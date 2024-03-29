import { takeLatest, takeEvery, call, put, delay, all } from "redux-saga/effects";

import { ADD_TO_WATCHLIST, AUTHORISE_USER, DELETE_USER, GET_CURRENT_MOVIE_DATA, GET_CURRENT_SEARCH_DATA, GET_MOVIES, UPDATE_USER, REMOVE_FROM_WATCHLIST } from "./actionConstants";

import { setCurrentMovieData } from "./actionCreators/currentMovie";
import { setCurrentSearchData } from "./actionCreators/currentSearch";
import { setMovies } from "./actionCreators/homepage";
import { setStateVariable } from "./actionCreators/stateVariables";
import { logout, setCurrentUserData } from "./actionCreators/auth";

import features from "../API/features_api";
import auth from "../API/auth_api";

const getErrorString = (error) => {
  let errorString = error;
  if (errorString.length > 50) errorString = "Something went wrong, please try again!";
  return errorString;
};

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
    yield put(setStateVariable("searchLoading", false));
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
    yield put(setStateVariable("homepageLoading", false));
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
    yield put(setStateVariable("movieLoading", false));
    yield put(setStateVariable("movieError", true));
  }
}

function* authoriseUser({ isLogin, data }) {
  try {
    yield put(setStateVariable("authLoading", true));

    const res = yield call(auth.authorise, isLogin, data);
    yield put(setCurrentUserData(res.data));

    yield put(setStateVariable("authLoading", false));
    yield put(setStateVariable("authSuccess", true));
  } catch (error) {
    yield put(setStateVariable("authLoading", false));
    yield put(setStateVariable("authError", getErrorString(error.response.data)));
  }
}

function* updateUserData({ token, data }) {
  try {
    yield put(setStateVariable("updateLoading", true));

    const res = yield call(auth.updateProfile, token, data);
    yield put(setCurrentUserData(res.data));

    yield put(setStateVariable("updateSuccess", true));
    yield put(setStateVariable("updateLoading", false));
  } catch (error) {
    yield put(setStateVariable("updateLoading", false));
    yield put(setStateVariable("updateError", getErrorString(error.response.data)));
  }
}

function* deleteUser({ token }) {
  try {
    yield put(setStateVariable("deleteLoading", true));

    yield call(auth.deleteProfile, token);
    yield put(logout());

    yield put(setStateVariable("deleteLoading", false));
  } catch (error) {
    yield put(setStateVariable("deleteLoading", false));
    yield put(setStateVariable("deleteError", getErrorString(error.response.data)));
  }
}

function* addToWatchlist({ token, data }) {
  try {
    yield put(setStateVariable("addToWatchlistLoading", true));
    const res = yield call(auth.addToWatchlist, token, data);
    yield put(setCurrentUserData(res.data));
    yield put(setStateVariable("addToWatchlistLoading", false));
  } catch (error) {
    yield put(setStateVariable("addToWatchlistLoading", false));
  }
}

function* removeFromWatchlist({ token, id }) {
  try {
    yield put(setStateVariable("addToWatchlistLoading", true));
    const res = yield call(auth.deleteFromWatchlist, token, { id });
    yield put(setCurrentUserData(res.data));
    yield put(setStateVariable("addToWatchlistLoading", false));
  } catch (error) {
    yield put(setStateVariable("addToWatchlistLoading", false));
  }
}

export default function* rootSaga() {
  yield takeLatest(GET_CURRENT_SEARCH_DATA, getSearchResults);

  yield takeEvery(GET_MOVIES, getMovies);

  yield takeEvery(GET_CURRENT_MOVIE_DATA, getMovieData);

  yield takeEvery(AUTHORISE_USER, authoriseUser);

  yield takeLatest(UPDATE_USER, updateUserData);

  yield takeLatest(DELETE_USER, deleteUser);

  yield takeLatest(ADD_TO_WATCHLIST, addToWatchlist);

  yield takeLatest(REMOVE_FROM_WATCHLIST, removeFromWatchlist);
}
