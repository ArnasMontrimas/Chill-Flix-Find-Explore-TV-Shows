import React from "react";
import PropTypes from "prop-types";
import useTvShowDetailsAsync from "../hooks/useTvShowDetailsAsync";
import { Router, Link } from "@reach/router";
import Cast from "./Cast";
import Crew from "./Crew";
import Episodes from "./Episodes";
import Seasons from "./Seasons";

function TvShowDetails({ id }) {
    const cast = useTvShowDetailsAsync(id, "cast");
    const crew = useTvShowDetailsAsync(id, "crew");
    const episodes = useTvShowDetailsAsync(id, "episodes");
    const seasons = useTvShowDetailsAsync(id, "seasons");

    return (
        <div>
            <h1>Pick what you want</h1>
            <div>
                <Link to="cast">Cast Info</Link>
                <Link to="crew">Crew info</Link>
                <Link to="episodes">Episodes info</Link>
                <Link to="seasons">Seasons info</Link>
            </div>
            <Router>
                <Cast path="cast" cast={cast} />
                <Crew path="crew" crew={crew} />
                <Episodes path="episodes" episodes={episodes} />
                <Seasons path="seasons" seasons={seasons} />
            </Router>
        </div>
    );
}

TvShowDetails.propTypes = {
    id: PropTypes.string,
};

export default TvShowDetails;
