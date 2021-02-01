import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";
import styles from "./Error.module.css";

const Error = () => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        let countdown = setInterval(() => {
            if (time === 0) {
                navigate("/");
            } else setTime(time - 1);
        }, 1000);

        return () => {
            clearInterval(countdown);
        };
    }, [time]);

    return (
        <div className={styles.container}>
            <h1>
                An issue might have occurred or you are spamming please stop...
                <br />
                You will be redirected home in{" "}
                <span className={styles.timerColor}>{time}</span> seconds
            </h1>
        </div>
    );
};

export default Error;
