import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import TvShowCard from "../cards/TvShowCard";
import Modal from "../components/Modal";

import card from "../cards/Card.module.css";
import button from "../components/Button.module.css";
import form from "../searchTvShowPage/Form.module.css";

export default function SearchMovie() {
    const [query, setQuery] = useState("");
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);

    let searchTvShow = async (query) => {
        setTvShows([]);
        // while not loading allow for call
        if (!loading) {
            // set loading to true while fetching
            setLoading(true);

            try {
                const res = await fetch(
                    `https://api.tvmaze.com/singlesearch/shows?q=${query}`,
                    {
                        method: "GET",
                    }
                );

                if (res.ok) {
                    const data = await res.json();
                    setTvShows([data]);
                } else {
                    setModal(true);
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
            {modal ? (
                <Modal>
                    <h2>Nothing Found</h2>
                    <button
                        className={button.btnModal}
                        onClick={() => setModal(false)}
                    >
                        Close
                    </button>
                </Modal>
            ) : null}
            <div className={card.cardContainer}>
                <div className={card.container}>
                    <h2>Search For Tv Shows</h2>
                    <form
                        className={form.container}
                        onSubmit={(e) => {
                            e.preventDefault();
                            searchTvShow(query);
                        }}
                    >
                        <label htmlFor="tvShowName">
                            <input
                                type="text"
                                id="tvShowName"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="TV Show name"
                            />
                        </label>
                        <input
                            className={
                                button.btnPrimary +
                                " " +
                                form.width179 +
                                " " +
                                form.marginTop
                            }
                            type="submit"
                            value="Search"
                            disabled={modal}
                        />
                    </form>
                </div>
            </div>
            <div className={card.cardContainer}>
                {tvShows.length === 0
                    ? null
                    : tvShows.map(
                          ({ id, genres, premiered, rating, image }) => (
                              <TvShowCard
                                  key={id}
                                  id={id}
                                  genres={genres}
                                  premiered={premiered}
                                  rating={rating}
                                  image={image}
                              />
                          )
                      )}
            </div>
        </div>
    );
}
