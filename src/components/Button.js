import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

function Button({ id }) {
    return (
        <button>
            <Link to={`tv-show/${id}`}>Learn More...</Link>
        </button>
    );
}

Button.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Button;
