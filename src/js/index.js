import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "../styles/Index.scss";

import Home from "./component/Home.jsx";

//render the application
ReactDOM.render(<Home />, document.querySelector("#app"));
