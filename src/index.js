import React from "react";
import { render } from "react-dom";
import TestComp from "./components/TestComp";
import TestComp2 from "./components/TestComp2";

//Global Styles
import "./globals.css";

//Main Componenet
const App = () => {
    return (
        <React.StrictMode>
            <TestComp />
            <TestComp2 />
        </React.StrictMode>
    );
};

render(<App />, document.querySelector("#root"));
