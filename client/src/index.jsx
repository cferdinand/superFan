import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App.jsx";
import { Provider } from "react-redux";
import store from "../src/store/store.jsx";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
