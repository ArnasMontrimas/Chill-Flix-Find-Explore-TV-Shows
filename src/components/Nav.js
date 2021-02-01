import React from "react";
import { Link } from "@reach/router";

//Styles
import css from "./Nav.module.css";

const Nav = () => {
    return (
        <header className={`${css.remove}`}>
            <nav className={`${css.nav}`}>
                <h3 className={`${css.logo}`}>
                    <Link to="/">Chill Flix</Link>
                </h3>
                <ul className={`${css.flexLayout}`}>
                    <li>
                        <Link className={css.anchorColor} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={css.anchorColor} to="/search">
                            Search
                        </Link>
                    </li>
                    <li>
                        <Link className={css.anchorColor} to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
