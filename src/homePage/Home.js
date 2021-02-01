import React, { useState } from "react";
import TvShowCard from "../cards/TvShowCard";
import useTvShowsAsync from "../hooks/useTvShowsAsync";

// Styles
import styles from "./Home.module.css";
import button from "../components/Button.module.css";

export default function Home() {
    const [reload, setReload] = useState(false);
    const tvShows = useTvShowsAsync(reload);

    return (
        <main className={styles.container}>
            <div className={styles.buttonContainer}>
                <button
                    onClick={() => {
                        localStorage.setItem("tvShows", []);
                        setReload(!reload);
                    }}
                    className={button.btnPrimary}
                >
                    Generate New Shows
                </button>
            </div>
            <div className={styles.cardContainer}>
                {tvShows.length === 0 ? (
                    <h1>Loading...</h1>
                ) : (
                    tvShows.map(({ id, genres, premiered, rating, image }) => (
                        <TvShowCard
                            key={id}
                            id={id}
                            genres={genres}
                            premiered={premiered}
                            rating={rating}
                            image={image}
                        />
                    ))
                )}
            </div>
        </main>
    );
}
