import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import TvShowCard from "../cards/TvShowCard";

import styles from "../cards/Card.module.css";

export default function SearchMovie() {
    const [query, setQuery] = useState("TV Show Name");
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(false);

    let searchTvShow = async (query) => {
        // while not loading allow for call
        if (!loading) {
            // set loading to true while fetching
            setLoading(true);

            try {
                const res = await fetch(
                    `http://api.tvmaze.com/singlesearch/shows?q=${query}`,
                    {
                        method: "GET",
                    }
                );

                if (res.ok) {
                    const data = await res.json();
                    setTvShows([data]);
                } else {
                    alert("This should be a modal! (Nothing Found!)");
                    //Need to change here because tvShows does not change so useEffect does not run
                    setLoading(false);
                }
            } catch (error) {
                // on an error redirect
                navigate("/error");
            }
        }
    };

    useEffect(() => {
        //After fetch is done set loading to false
        return () => setLoading(false);
    }, [tvShows]);

    return (
        <div>
            <h1>Search For Tv Shows</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    searchTvShow(query);
                }}
            >
                <label htmlFor="tvShowName">
                    TV Show Name
                    <input
                        type="text"
                        id="tvShowName"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </label>
                <input type="submit" value="Search" />
            </form>
            <div className={styles.cardContainer}>
                {tvShows.length === 0 ? (
                    <h1>Waiting...</h1>
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
        </div>
    );
}
