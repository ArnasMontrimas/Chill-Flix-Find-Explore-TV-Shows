import React from "react";
import PropTypes from "prop-types";

import defaultImg from "../images/no-image.jpg";

// styles
import styles from "./Card.module.css";

const CrewCard = ({
    type,
    name,
    country,
    birthday,
    deathday,
    gender,
    image,
}) => {
    return (
        <div className={styles.container}>
            <header>
                <img
                    className={styles.border}
                    src={image || defaultImg}
                    alt="Crew Member Portrait"
                />
            </header>
            <section>
                <p>Type:&nbsp;{type}</p>
                <p>Name:&nbsp;{name || "N/A"}</p>
                <p>Country:&nbsp;{country || "N/A"}</p>
                <p>Birthday:&nbsp;{birthday || "N/A"}</p>
                <p>Deathday:&nbsp;{deathday || "N/A"}</p>
                <p>Gender:&nbsp;{gender || "N/A"}</p>
            </section>
        </div>
    );
};

CrewCard.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    birthday: PropTypes.string,
    deathday: PropTypes.string,
    gender: PropTypes.string,
    image: PropTypes.string,
};

export default CrewCard;
