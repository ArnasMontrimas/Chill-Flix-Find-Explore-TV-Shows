import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CrewCard from "../cards/CrewCard";

// styles
import styles from "../cards/Card.module.css";

const Crew = (props) => {
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        setCrew(props.crew);
    }, [props.crew]);

    return (
        <section className={styles.cardContainer}>
            {crew.length === 0
                ? null
                : crew.map(({ type, person }, index) => (
                      <CrewCard
                          key={index}
                          type={type || "N/A"}
                          name={person?.name}
                          country={person?.country?.name}
                          birthday={person?.birthday}
                          deathday={person?.deathday}
                          gender={person?.gender}
                          image={person?.image?.medium}
                      />
                  ))}
        </section>
    );
};

Crew.propTypes = {
    crew: PropTypes.array,
};

export default Crew;
