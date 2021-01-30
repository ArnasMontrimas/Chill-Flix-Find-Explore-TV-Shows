import React from "react";
import PropTypes from "prop-types";

function TvShowDetails({ id }) {
    return <h1>Hello {id}</h1>;
}

TvShowDetails.propTypes = {
    id: PropTypes.string,
};

export default TvShowDetails;
