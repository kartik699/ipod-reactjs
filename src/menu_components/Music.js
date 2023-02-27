import React, { useEffect } from "react";

const Music = () => {
    // adding the rotation script when the component mounts and removing it when it unmounts
    useEffect(() => {
        const musicScript = document.createElement('script');
        musicScript.src = "./scripts/music.js";

        document.body.appendChild(musicScript);

        return (() => 
            document.querySelector("script[src='./scripts/music.js']").remove()
        );
    }, []);

    return(
        <div className="menu-display music-menu">
            <img src="https://i1.sndcdn.com/artworks-UdXgRYwFJi7utJJM-pGG8kA-t500x500.jpg" alt="song cover" />
            <div id="music-bar-container">
                <div id="music-bar"></div>
            </div>
            <div id="song-duration">
                <span>1:16</span>
                <span>3:42</span>
            </div>
        </div>
    );
};

export default Music;