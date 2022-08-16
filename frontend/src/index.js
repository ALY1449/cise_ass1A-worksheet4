/* eslint-disable react/jsx-no-undef */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //error here, should be App instead of Main
import "./index.css";
 
ReactDOM.render(
  <App/>, 
  document.getElementById("root")
);
