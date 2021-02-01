import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import button from "../components/Button.module.css";

function TvShowDetailsButton({ id }) {
    return (
        <button className={button.btnPrimary}>
            <Link to={`tv-show/${id}`}>Learn More</Link>
        </button>
    );
}

TvShowDetailsButton.propTypes = {
    id: PropTypes.number.isRequired,
};

export default TvShowDetailsButton;
