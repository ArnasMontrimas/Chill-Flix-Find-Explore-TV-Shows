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
import TvShowDetails from "./components/TvShowDetails";
import Error from "./components/Error";
// Global Styles
import "./globals.css";

// Main Componenet
const App = () => {
    return (
        <React.StrictMode>
            <Nav />
            <Router>
                <Home path="/" />
                <SearchMovie path="/search" />
                <About path="/about" />
                <TvShowDetails path="/tv-show/:id/*" />
                <Error path="/error" />
            </Router>
            <br />
            <br />
        </React.StrictMode>
    );
};

render(<App />, document.querySelector("#root"));
