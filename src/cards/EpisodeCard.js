import React from "react";
import PropTypes from "prop-types";

import styles from "./Card.module.css";

const EpisodeCard = ({
    name,
    season,
    number,
    type,
    airdate,
    airtime,
    runtime,
    img,
}) => {
    return (
        <div className={styles.container}>
            <header>
                <img className={styles.border} src={img} alt="Episode Poster" />
            </header>
            <section>
                <p>Name:&nbsp;{name}</p>
                <p>Season:&nbsp;{season}</p>
                <p>Number:&nbsp;{number}</p>
                <p>Type:&nbsp;{type}</p>
                <p>Air Date:&nbsp;{airdate}</p>
                <p>Air Time:&nbsp;{airtime}</p>
                <p>Run Time:&nbsp;{runtime}</p>
            </section>
        </div>
    );
};

EpisodeCard.propTypes = {
    name: PropTypes.string,
    season: PropTypes.number,
    number: PropTypes.number,
    type: PropTypes.string,
    airdate: PropTypes.string,
    airtime: PropTypes.string,
    runtime: PropTypes.number,
    img: PropTypes.string,
};

export default EpisodeCard;
