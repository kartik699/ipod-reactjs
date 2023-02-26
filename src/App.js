import React, { useState } from "react";
import Wheel from "./Wheel";
import Screen from "./Screen";

function App() {
  const [menu, setMenu] = useState(-1);

  const selectActiveItem = () => {
    const activeItemId = parseInt(document.querySelector('.active').getAttribute('data-itemid'));
    setMenu(activeItemId);
  }

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
