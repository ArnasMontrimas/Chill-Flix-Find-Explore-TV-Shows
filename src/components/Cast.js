import React from "react";

/* eslint-disable react/prop-types */
function Cast({ cast }) {
    return (
        <h1>
            {/* eslint-disable react/prop-types */}
            {cast.map(({ character, person }) => (
                <p key={character.id + person.id / 10}>
                    {character.name}&nbsp;|&nbsp;{person.name}
                </p>
            ))}
            {/* No here we render CastCard in the map and so on for all the others! */}
        </h1>
    );
}

export default Cast;
