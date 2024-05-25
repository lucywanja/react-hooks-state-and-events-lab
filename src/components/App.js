import React from "react";
import { useState } from 'react'
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  
  const [isDarkMode, setIsDarkMode] = useState(false);//this indicates light mode


  function handleDarkModeClick () {
    //  Using the previous state value (prevMode) ensures the state is correctly toggled even if the state update is asynchronous.
    setIsDarkMode((prevMode) => !prevMode)
    
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
