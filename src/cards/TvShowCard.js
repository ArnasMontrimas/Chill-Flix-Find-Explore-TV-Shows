import React from "react";
import PropTypes from "prop-types";
import TvShowDetailsButton from "../components/TvShowDetailsButton";

// Styles
import styles from "./Card.module.css";

function TvShowCard({ id, genres, premiered, rating, image }) {
    return (
        <section className={styles.container}>
            <header>
                <img
                    className={styles.border}
                    src={image.medium || "No Image"}
                    alt="Movie Poster"
                />
            </header>
            <section>
                <p>Genres:&nbsp;{genres[0] || "N/A"}</p>
                <p>Rating:&nbsp;{rating.average || "N/A"}</p>
                <p>Premiered:&nbsp;{premiered || "N/A"}</p>
            </section>
            <footer>
                <TvShowDetailsButton id={id} />
            </footer>
        </section>
    );
}

TvShowCard.propTypes = {
    id: PropTypes.number.isRequired,
    genres: PropTypes.array,
    premiered: PropTypes.string,
    rating: PropTypes.object,
    image: PropTypes.object,
};

export default TvShowCard;
