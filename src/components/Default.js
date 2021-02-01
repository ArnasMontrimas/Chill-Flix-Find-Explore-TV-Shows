import React from "react";
import PropTypes from "prop-types";
import styles from "./Default.module.css";

const Default = ({ text }) => {
    return (
        <div className={styles.container}>
            <h1>{text}</h1>
        </div>
    );
};

Default.propTypes = {
    text: PropTypes.string,
};

export default Default;
