import React from "react";
import PropTypes from "prop-types";
import useTvShowDetailsAsync from "../hooks/useTvShowDetailsAsync";
import { Router } from "@reach/router";
import Cast from "./Cast";
import Crew from "./Crew";
import Episodes from "./Episodes";
import Seasons from "./Seasons";
import Button from "./Button";

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
            <div className={styles1.headingContainer}>
                <div className={styles1.container}>
                    <div className={styles1.linkContainer}>
                        <Button
                            to="cast"
                            text="Cast"
                            className={styles1.buttonFlex}
                        />
                        <Button
                            to="crew"
                            text="Crew"
                            className={styles1.buttonFlex}
                        />
                        <Button
                            to="episodes"
                            text="Episodes"
                            className={styles1.buttonFlex}
                        />
                        <Button
                            to="seasons"
                            text="Seasons"
                            className={styles1.buttonFlex}
                        />
                    </div>
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
