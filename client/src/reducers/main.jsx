import { combineReducers } from "redux";
import teams from "./teams.jsx";
import fixtures from "./fixtures.jsx";
import favorite from "./favorite.jsx";
import highlights from "./highlights.jsx";
import standings from "./standings.jsx";

const main = combineReducers({
  teams,
  fixtures,
  favorite,
  highlights,
  standings
});

export default main;
