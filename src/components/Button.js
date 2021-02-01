import React from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import button from "../components/Button.module.css";

const Button = ({ to, text, className }) => {
    return (
        <button className={className + " " + button.btnPrimary}>
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
