import React from "react";

const MainMenu = () => {
    return(
        <div id="menu">
            <span style={{padding: 5, fontSize: '1.3em'}}>iPod.js</span>
            <ul className="menu-items-list">
                <li className="menu-item" data-itemid="0">Cover Flow</li>
                <li className="menu-item active" data-itemid="1">Music</li>
                <li className="menu-item" data-itemid="2">Games</li>
                <li className="menu-item" data-itemid="3">Settings</li>
            </ul>
        </div>
    );
};

export default MainMenu;