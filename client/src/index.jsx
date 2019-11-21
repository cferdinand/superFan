import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App.jsx";
import { Provider } from "react-redux";
import store from "../src/store/store.jsx";
import {
  Route,
  Link,
  Switch,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import ChooseTeam from "./containers/Teams.jsx";
import Home from "./components/MainPage.jsx";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" component={App} />
        </Route>
        <Route exact path="/login" component={App} />
        <Route exact path="/teams" component={ChooseTeam} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routing}</Provider>,
  document.getElementById("app")
);
