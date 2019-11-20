import { combineReducers } from "redux";
import teams from "./teams.jsx";
import fixtures from "./fixtures.jsx";
import favorite from "./favorite.jsx";

const main = combineReducers({ teams, fixtures, favorite });

export default main;
