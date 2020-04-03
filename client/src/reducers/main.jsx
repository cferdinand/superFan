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

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "USER_LOGGED_OUT") {
    state = undefined;
  }

  return main(state, action);
};

export default rootReducer;
