import React, { useEffect, useState } from "react";
import Coverflow from "./menu_components/Coverflow";
import Games from "./menu_components/Games";
import MainMenu from "./menu_components/MainMenu";
import Settings from "./menu_components/Settings";
import Music from "./menu_components/Music";

const Screen = ({ menuId }) => {
    // background images for ipod
    let backgrounds = [
        "https://images.unsplash.com/photo-1677131001999-aa1291476c37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        "https://images.unsplash.com/photo-1677098077185-5438068c2ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        "https://images.unsplash.com/photo-1677010062850-9fbd31bfc8c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676967016596-e1c519823ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1676920822165-d2ab8bebe401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    ];

    const [ipodBackgrounds, setBg] = useState(backgrounds);

    /*
    Additional Feature: Changing ipod's background per 10 second
    below useEffect is synonymous to componentDidMount and componentDidUpdate
    it will start an interval which changes the ipod's background
    the return is returning a function to stop interval and it is synonymous to componentWillUnmount
    */

    useEffect(() => {
        let i = 0;
        const screen = document.getElementById("screen");
        
        let id = setInterval(() => {
            i = (++i) % ipodBackgrounds.length;   // keeping the value of i between 0-4
            
            screen.style.background = `no-repeat center/cover url(${ipodBackgrounds[i]})`;

            setBg(ipodBackgrounds);
        }, 10000);

        return (() => clearInterval(id));
    }, [ipodBackgrounds]);

    return (
        <div id="screen">
            {/* correct menu will be shown based on the menuId provided by App component as prop */}
            { (menuId === -1) ? <MainMenu /> : '' }
            { (menuId === 0) ? <Coverflow /> : '' }
            { (menuId === 1) ? <Music /> : '' }
            { (menuId === 2) ? <Games /> : '' }
            { (menuId === 3) ? <Settings /> : '' }
        </div>
    );
};

export default Screen;