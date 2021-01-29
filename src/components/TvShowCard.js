import React from "react";
import PropTypes from "prop-types";

function TvShowCard({ name, genres, premiered, rating, image, summary }) {
    return (
        <section>
            <header>
                <h4>{name}</h4>
                <img src={image.medium} alt="Movie Poster" />
            </header>
            <section>
                <p>Genres: {genres}</p>
                <p>Summary{summary}</p>
                <p>Rating: {rating}</p>
                <p>Premiered: {premiered}</p>
            </section>
        </section>
    );
}

TvShowCard.propTypes = {
    name: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    premiered: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    summary: PropTypes.string.isRequired,
};

export default TvShowCard;
