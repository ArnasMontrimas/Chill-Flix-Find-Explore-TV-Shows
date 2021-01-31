import React from "react";
import PropTypes from "prop-types";

import defaultImg from "../images/no-image.jpg";

// styles
import styles from "./Card.module.css";

const CastCard = ({
    img,
    personName,
    characterName,
    personCountry,
    personBday,
    personDday,
    personGender,
}) => {
    return (
        <div className={styles.container}>
            <header>
                <img
                    className={styles.border}
                    src={img || defaultImg}
                    alt="Character Portrait"
                />
            </header>
            <section>
                <p>Perosn:&nbsp;{personName || "N/A"}</p>
                <p>Character:&nbsp;{characterName || "N/A"}</p>
                <p>Country:&nbsp;{personCountry || "N/A"}</p>
                <p>Birth Day:&nbsp;{personBday || "N/A"}</p>
                <p>Death Day:&nbsp;{personDday || "N/A"}</p>
                <p>Gender:&nbsp;{personGender || "N/A"}</p>
            </section>
        </div>
    );
};

CastCard.propTypes = {
    img: PropTypes.string,
    personName: PropTypes.string,
    characterName: PropTypes.string,
    personCountry: PropTypes.string,
    personBday: PropTypes.string,
    personDday: PropTypes.string,
    personGender: PropTypes.string,
};

export default CastCard;
