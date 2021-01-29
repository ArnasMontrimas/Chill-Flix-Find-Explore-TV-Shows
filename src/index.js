// Libraries
import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";

import "core-js/stable";
import "regenerator-runtime/runtime";

// Local Components
import Nav from "./components/Nav";
import About from "./aboutPage/About";
import Home from "./homePage/Home";
import SearchMovie from "./searchMoviePage/SearchMovie";

// Global Styles
import "./globals.css";

// Main Componenet
const App = () => {
    return (
        <React.StrictMode>
            <Nav />
            <Router>
                <Home path={`${__dirname}/`}></Home>
                <SearchMovie path={`${__dirname}/search`}></SearchMovie>
                <About path={`${__dirname}/about`}></About>
            </Router>
        </React.StrictMode>
    );
};

render(<App />, document.querySelector("#root"));
