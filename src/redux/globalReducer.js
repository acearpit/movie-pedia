import { combineReducers } from "redux";

import CurrentSearch from "./reducers/currentsearch";
import StateVariables from "./reducers/statevariables";
import CurrentMovieData from "./reducers/currentmoviedata";
import HomePage from "./reducers/homepage";

export default combineReducers({ currentSearch: CurrentSearch, stateVariables: StateVariables, movieData: CurrentMovieData, homepage: HomePage });
