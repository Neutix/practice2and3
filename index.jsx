import React from "react";
import ReactDOM from "react-dom";
import {Application} from "./quizGame";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter><Application /></BrowserRouter>, document.getElementById("app"));