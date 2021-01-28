import React from "react";
import styles from "./TestComp.module.css";
import styles2 from "./TestComp2.module.css";

class TestComp2 extends React.Component {
    render() {
        console.log(styles);
        return (
            <div className={`${styles.backgroundColor} ${styles2.addPadding}`}>
                <h1 className="">Hello World!</h1>
                <img
                    src={require("../res/images/Capture.JPG")}
                    alt="Lithuanian Castle"
                />
                <img
                    height="200px"
                    width="200px"
                    src={require("../res/svgs/lithuania.svg")}
                    alt="random svg"
                />
            </div>
        );
    }
}

export default TestComp2;
