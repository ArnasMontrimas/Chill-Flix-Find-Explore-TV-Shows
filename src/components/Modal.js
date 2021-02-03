import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import modalStyle from "../components/Modal.module.css";

const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const modal = document.getElementById("modal");
        modal.appendChild(elRef.current);

        return () => modal.removeChild(elRef.current);
    }, []);

    return createPortal(
        <div className={modalStyle.container}>{children}</div>,
        elRef.current
    );
};

export default Modal;
