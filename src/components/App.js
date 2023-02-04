import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      
      {/* Deliverable 1: pass down state and callback that updates state to Header */}
      <Header onChangeMode={onDarkModeClick} isDarkMode={isDarkMode}/>
      
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
