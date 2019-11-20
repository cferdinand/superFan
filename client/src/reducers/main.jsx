import { combineReducers } from "redux";
import teams from "./teams.jsx";
import fixtures from "./fixtures.jsx";

const main = combineReducers({ teams: teams, fixtures: fixtures });

export default main;
