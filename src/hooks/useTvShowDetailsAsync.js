import { useState, useEffect } from "react";
import AbortController from "abort-controller";
import { navigate } from "@reach/router";

const useTvShowDetailsAsync = (id, option) => {
    // tvShows array State Hook
    const [tvShowDetails, setTvShowDetails] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        let fetchTvShows = async () => {
            const res = await fetch(
                `http://api.tvmaze.com/shows/${id}/${option}`,
                {
                    method: "GET",
                    signal: signal,
                }
            );
            const data = await res.json();

            setTvShowDetails(data);

            // if useEffect is called again before async call finshed cancel the previous async call
            return () => {
                controller.abort();
            };
        };
        fetchTvShows().catch(() => navigate("/error"));
    }, [id, option]);

    return tvShowDetails;
};

export default useTvShowDetailsAsync;
