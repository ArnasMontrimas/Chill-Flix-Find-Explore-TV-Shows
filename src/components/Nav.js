import React from "react";
import { Link } from "@reach/router";

//Styles
import css from "./Nav.module.css";

const Nav = () => {
    return (
        <header className={`${css.remove}`}>
            <nav className={`${css.nav}`}>
                <h3 className={`${css.logo}`}>Chill Flix</h3>
                <ul className={`${css.flexLayout}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
