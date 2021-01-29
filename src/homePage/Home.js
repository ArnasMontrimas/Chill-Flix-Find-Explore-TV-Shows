import React, { useState, useEffect } from "react";
import TvShowCard from "../components/TvShowCard";

export default function Home() {
    // tvShows array State Hook
    let [tvShows, setTvShows] = useState([]);

    // Run 1 time when component first loads
    useEffect(() => {
        let fetchTvShows = async () => {
            let allData = []; // Store all data returned from fetch requests
            let id; // id which we will randomly generate between 1000 and 1
            let i = 0; // increment number

            // When increment number greater than 10 stop
            while (i < 10) {
                id = Math.floor(Math.random() * 1000 + 1);

                const res = await fetch(`http://api.tvmaze.com/shows/${id}`);
                // if the response encountered a 404 skipp this iteration without updating iteration number
                if (res.status === 404) {
                    continue;
                } else {
                    const data = await res.json();
                    allData.push(data);
                    i++;
                }
            }

            // after all data is retrieved set the state
            setTvShows(allData);
        };
        fetchTvShows();
    }, []);

    return (
        <main>
            {tvShows.length === 0 ? (
                <h1>Loading....</h1>
            ) : (
                tvShows.map((tv) => (
                    <TvShowCard
                        key={tv.id}
                        name={tv.name}
                        genres={tv.genres}
                        premiered={tv.premiered}
                        rating={tv.premiered}
                        image={tv.image}
                        summary={tv.summary}
                    />
                ))
            )}
        </main>
    );
}
