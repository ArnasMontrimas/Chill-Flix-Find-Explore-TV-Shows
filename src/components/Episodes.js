import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import EpisodeCard from "../cards/EpisodeCard";

// styles
import styles from "../cards/Card.module.css";

// resources
import defaultImg from "../images/no-image-available.jpg";

const Episodes = (props) => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        setEpisodes(props.episodes);
    }, [props.episodes]);

    return (
        <section className={styles.cardContainer}>
            {episodes.length === 0
                ? null
                : episodes.map(
                      ({
                          id,
                          name,
                          season,
                          number,
                          type,
                          airdate,
                          airtime,
                          runtime,
                          image,
                      }) => (
                          <EpisodeCard
                              key={id}
                              name={name || "N/A"}
                              season={season || "N/A"}
                              number={number || "N/A"}
                              type={type || "N/A"}
                              airdate={airdate || "N/A"}
                              airtime={airtime || "N/A"}
                              runtime={runtime || "N/A"}
                              img={image?.medium || defaultImg}
                          />
                      )
                  )}
        </section>
    );
};

Episodes.propTypes = {
    episodes: PropTypes.array,
};

export default Episodes;
