import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

import "./index.css";
import WebApp from "./WebApp";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <WebApp />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("webapp")
);
