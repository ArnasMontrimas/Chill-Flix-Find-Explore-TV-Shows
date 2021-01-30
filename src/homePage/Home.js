import React from "react";
import TvShowCard from "../components/TvShowCard";
import useTvShowsAsync from "../hooks/useTvShowsAsync";

// Styles
import styles from "./Home.module.css";

export default function Home() {
    const tvShows = useTvShowsAsync();

    return (
        <main className={styles.container}>
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
