import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

function TvShowDetailsButton({ id }) {
    return (
        <button>
            <Link to={`tv-show/${id}`}>Learn More...</Link>
        </button>
    );
}

TvShowDetailsButton.propTypes = {
    id: PropTypes.number.isRequired,
};

export default TvShowDetailsButton;
