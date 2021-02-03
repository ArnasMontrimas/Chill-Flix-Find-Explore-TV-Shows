import React, { useState, useEffect } from "react";
import SeasonCard from "../cards/SeasonCard";
import PropTypes from "prop-types";

// styles
import styles from "../cards/Card.module.css";

// resources
import defaultImg from "../images/no-image-available.jpg";

const Seasons = (props) => {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        setSeasons(props.seasons);
    }, [props.seasons]);

    return (
        <section className={styles.cardContainer}>
            {seasons.length === 0
                ? null
                : seasons.map(
                      (
                          {
                              id,
                              name,
                              episodeOrder,
                              premiereDate,
                              endDate,
                              network,
                              image,
                          },
                          index
                      ) => (
                          <SeasonCard
                              key={id}
                              name={name || "N/A"}
                              episodeOrder={episodeOrder || "N/A"}
                              premiereDate={premiereDate || "N/A"}
                              endDate={endDate || "N/A"}
                              networkName={network?.name || "N/A"}
                              networkCountry={network?.country?.name || "N/A"}
                              img={image?.medium || defaultImg}
                              index={index}
                          />
                      )
                  )}
        </section>
    );
};

Seasons.propTypes = {
    seasons: PropTypes.array,
};

export default Seasons;
