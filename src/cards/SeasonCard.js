import React from "react";
import PropTypes from "prop-types";

// styles
import styles from "./Card.module.css";

const SeasonCard = ({
    name,
    episodeOrder,
    premiereDate,
    endDate,
    networkName,
    networkCountry,
    img,
    index,
}) => {
    return (
        <div className={styles.container}>
            <header>
                <img className={styles.border} src={img} alt="Season Poster" />
            </header>
            <section>
                <p>Name:&nbsp;{name}</p>
                <p>Season:&nbsp;{index + 1}</p>
                <p>Total Episodes:&nbsp;{episodeOrder}</p>
                <p>Premiere Date:&nbsp;{premiereDate}</p>
                <p>End Date:&nbsp;{endDate}</p>
                <p>Network Name:&nbsp;{networkName}</p>
                <p>Network Country:&nbsp;{networkCountry}</p>
            </section>
        </div>
    );
};

SeasonCard.propTypes = {
    name: PropTypes.string,
    episodeOrder: PropTypes.number,
    premiereDate: PropTypes.string,
    endDate: PropTypes.string,
    networkName: PropTypes.string,
    networkCountry: PropTypes.string,
    img: PropTypes.string,
    index: PropTypes.number,
};

export default SeasonCard;
