import React, { useState } from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";

function App() {
  const [menu, setMenu] = useState(-1);

  // function to change menu using menuId
  const selectActiveItem = () => {
    const activeItemId = parseInt(document.querySelector('.active').getAttribute('data-itemid'));
    setMenu(activeItemId);
  }

  // upon the click of menu on the wheel, it will return to main menu
  const returnMainMenu = () => {
    setMenu(-1);
  };

  return (
    <div className="App">
      <Screen menuId={menu} />
      <Wheel
      selectActiveItem={selectActiveItem}
      returnMainMenu={returnMainMenu}
      />
    </div>
  );
}

export default App;
