import React from "react";
import PropTypes from "prop-types";
import useTvShowDetailsAsync from "../hooks/useTvShowDetailsAsync";
import { Router, Link } from "@reach/router";
import Cast from "./Cast";
import Crew from "./Crew";
import Episodes from "./Episodes";
import Seasons from "./Seasons";

// styles
import styles1 from "../components/TvShowDetails.module.css"; // I know not the best naming convetion....
import styles from "../cards/Card.module.css";

function TvShowDetails({ id }) {
    const cast = useTvShowDetailsAsync(id, "cast");
    const crew = useTvShowDetailsAsync(id, "crew");
    const episodes = useTvShowDetailsAsync(id, "episodes");
    const seasons = useTvShowDetailsAsync(id, "seasons");
    return (
        <div>
            <div className={styles1.container}>
                <h1 className={styles1.mainText}>Pick what you want</h1>
                <div className={styles1.linkContainer}>
                    <Link to="cast">Cast Info</Link>
                    <Link to="crew">Crew info</Link>
                    <Link to="episodes">Episodes info</Link>
                    <Link to="seasons">Seasons info</Link>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <Router>
                    <Cast path="cast" cast={cast} />
                    <Crew path="crew" crew={crew} />
                    <Episodes path="episodes" episodes={episodes} />
                    <Seasons path="seasons" seasons={seasons} />
                </Router>
            </div>
        </div>
    );
}

TvShowDetails.propTypes = {
    id: PropTypes.string,
};

export default TvShowDetails;
