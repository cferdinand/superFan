import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../src/components/App.jsx";
import store from "../src/store/store.jsx";
import ChooseTeam from "./containers/TeamChooserContainer.jsx";
import Home from "./containers/HomeContainer.jsx";
import SignUp from "./components/SignUp.jsx";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route export path="/signup" component={SignUp} />
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
