import { combineReducers } from "redux";
import teams from "./teams.jsx";

const main = combineReducers({ teams: teams });

export default main;
