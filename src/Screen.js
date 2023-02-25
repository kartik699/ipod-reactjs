import React, { useEffect, useState } from "react";

const Screen = () => {
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
            <div id="menu">
                <span style={{padding: 5, fontSize: '1.3em'}}>iPod.js</span>
                <ul className="menu-items-list">
                    <li className="menu-item" data-itemid="0">Cover Flow</li>
                    <li className="menu-item active" data-itemid="1">Music</li>
                    <li className="menu-item" data-itemid="2">Games</li>
                    <li className="menu-item" data-itemid="3">Settings</li>
                </ul>
            </div>
        </div>
    );
};

export default Screen;