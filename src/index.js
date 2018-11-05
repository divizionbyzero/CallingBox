import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import NameCalling from "./NameCalling";

import "./styles.css";

function App() {
  return <NameCalling />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
