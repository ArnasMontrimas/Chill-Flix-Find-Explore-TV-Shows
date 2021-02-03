import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CastCard from "../cards/CastCard";

// styles
import styles from "../cards/Card.module.css";

function Cast(props) {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        setCast(props.cast);
    }, [props.cast]);

    return (
        <section className={styles.cardContainer}>
            {cast.length === 0
                ? null
                : cast.map(({ character, person }) => (
                      <CastCard
                          key={character.id + person.id / 10}
                          img={person?.image?.medium}
                          personName={person?.name}
                          characterName={character?.name}
                          personCountry={person?.country?.name}
                          personBday={person?.birthday}
                          personDday={person?.deathday}
                          personGender={person?.gender}
                      />
                  ))}
        </section>
    );
}

Cast.propTypes = {
    cast: PropTypes.array,
};

export default Cast;
