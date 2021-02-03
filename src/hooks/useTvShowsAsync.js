import { useState, useEffect } from "react";
import AbortController from "abort-controller";
import { navigate } from "@reach/router";

const useTvShowsAsync = (reload) => {
    // tvShows array State Hook
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        let fetchTvShows = async () => {
            let allData = []; // Store all data returned from fetch requests
            let allId = []; // store random numbers here
            let id; // id which we will randomly generate between 1000 and 1
            let i = 0; // increment number
            let maxRetries = 0; // limit number of retries if 404 encountered

            //Setting it here to empty arr so when i generate new batch of tvShows the tvShow.length === 0 is true and loading is displayed
            setTvShows([]);
            // When increment number greater than 10 stop
            while (i < 12) {
                id = Math.floor(Math.random() * 1000 + 1);

                // if duplicate found add 1 to it
                allId?.forEach((item) => {
                    if (item === id) {
                        id += 1;
                    }
                });

                allId.push(id);

                const res = await fetch(`https://api.tvmaze.com/shows/${id}`, {
                    method: "GET",
                    signal: signal,
                });
                if (res.status === 404) {
                    if (maxRetries != 10) {
                        maxRetries++;
                        continue;
                    } else i++;
                } else {
                    const data = await res.json();
                    allData.push(data);
                    i++;
                }
            }
            setTvShows(allData);
            localStorage.setItem("tvShows", JSON.stringify(allData));
        };

        if (
            localStorage.getItem("tvShows") === [] ||
            localStorage.getItem("tvShows") === null ||
            localStorage.getItem("tvShows") === false ||
            localStorage.getItem("tvShows") === undefined ||
            localStorage.getItem("tvShows") === ""
        ) {
            fetchTvShows().catch(() => navigate("/error"));
            // if useEffect is called again before async call finshed cancel the previous async call
            return () => controller.abort();
        } else {
            try {
                setTvShows(JSON.parse(localStorage.getItem("tvShows")));
            } catch (error) {
                localStorage.setItem("tvShows", []);

                fetchTvShows().catch(() => navigate("/error"));
                // if useEffect is called again before async call finshed cancel the previous async call
                return () => controller.abort();
            }
        }
    }, [reload]);

    return tvShows;
};

export default useTvShowsAsync;
