import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const Button = ({ to, text, className }) => {
    return (
        <button className={className}>
            <Link to={to}>{text}</Link>
        </button>
    );
};

Button.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Button;
