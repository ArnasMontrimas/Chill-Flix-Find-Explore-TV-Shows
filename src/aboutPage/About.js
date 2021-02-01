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
                    shows. (Then talk about the search page (Its not done
                    yet....))
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
                    <li className={styles.listItemPadding}>Blalala</li>
                </ul>
            </div>
            <br />
            <br />
            <div>
                <h2 className={styles.headingColor}>Learning Outcomes</h2>
                <p className={styles.biggerText}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vitae tenetur nulla, voluptatum cum eum libero et non
                    suscipit voluptatem incidunt!
                </p>
            </div>
        </section>
    );
}
