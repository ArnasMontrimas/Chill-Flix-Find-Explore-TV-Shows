import React from "react";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.container}>
            <div>
                <h1 className={styles.headingColor}>About</h1>
                <p className={styles.biggerText}>
                    React application where a user may find a new tv show to
                    watch. On the home page the user is presented with 12
                    different tv shows, the user can learn the cast information,
                    crew information, episodes information and seasons
                    information on any of the shows, if he does not like any of
                    the tv shows presented he may generate another set of 12 tv
                    shows. The user may go to the search page where he can
                    search for a TV Show by its name and get all the information
                    as in the home page
                </p>
            </div>
            <br />
            <br />
            <div>
                <h2 className={styles.headingColor}>Functionality</h2>
                <ul className={styles.biggerText}>
                    <li className={styles.listItemPadding}>View TV Shows</li>
                    <li className={styles.listItemPadding}>
                        View 4 Extra Parts of Information on Each TV Show
                        <br />
                        Cast, Crew, Episodes, Seasons.
                    </li>
                    <li className={styles.listItemPadding}>
                        Generated TV Shows are Saved to localStorage
                    </li>
                    <li className={styles.listItemPadding}>
                        Clear localStorage & Generate New TV Shows
                    </li>
                    <li className={styles.listItemPadding}>
                        Search For TV Show by Name
                    </li>
                </ul>
            </div>
            <br />
            <br />
            <div>
                <h2 className={styles.headingColor}>Learning Outcomes</h2>
                <p className={styles.biggerText}>
                    <b>React Basics:</b>&nbsp;Creating components, passing
                    props, rendering to the DOM, component life-cycle
                    <br />
                    <br />
                    <b>React Hooks:</b>&nbsp;useState, useEffect, useRef and
                    custom hooks.
                    <br />
                    <br />
                    <b>Portals:</b>&nbsp;created a portal for the modal.
                    <br />
                    <br />
                    <b>Fetching Data:</b>&nbsp;Avoiding race conditions and
                    memory leaks, displaying the data in the DOM.
                    <br />
                    <br />
                    <b>Webpack:</b>&nbsp;Setting up webpack for development with
                    dev server and for production with extracting css, minifying
                    css, js, html.
                    <br />
                    <br />
                    <b>Eslint:</b>&nbsp;Eslint set up to adhere to a good
                    standard.
                    <br />
                    <br />
                    <b>Prettier:</b>&nbsp;Prettier for a good code format.
                </p>
            </div>
        </section>
    );
}
