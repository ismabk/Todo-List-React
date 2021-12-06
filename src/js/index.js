import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";

import "../styles/Index.scss";

import List from "./component/List.jsx";

//render the application
ReactDOM.render(<List />, document.querySelector("#app"));
