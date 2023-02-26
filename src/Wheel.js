import React, { useEffect } from "react";

const Wheel = ({ selectActiveItem, returnMainMenu }) => {
    // adding the rotation script when the component mounts
    useEffect(() => {
        const ztScript = document.createElement('script');
        ztScript.src = "./scripts/zingtouch.js";

        document.body.appendChild(ztScript);
    }, []);

    return (
        <div id="wheel-container">
            <div id="wheel">
                <div id="clickable" onClick={() => selectActiveItem()}></div>
                <div className="btn menu-btn" onClick={() => returnMainMenu()}>
                    <span draggable="false"><strong>Menu</strong></span>
                </div>
                <div className="btn back-btn">
                    <span draggable="false"><i className="fa-solid fa-backward-fast"></i></span>
                </div>
                <div className="btn next-btn">
                    <span draggable="false"><i className="fa-solid fa-forward-fast"></i></span>
                </div>
                <div className="btn playpause-btn">
                    <img src="https://cdn-icons-png.flaticon.com/512/5725/5725942.png" alt="play pause button" draggable="false" />
                </div>
            </div>
        </div>
    );
};

export default Wheel;