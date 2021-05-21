import React, { createContext, useState } from "react";

export const SelectedItemContext = createContext();

export const SelectedItemContextProvider = ({ children }) => {
  const [clickedItem, setclickedItem] = useState({});

  const contextValue = {
    clickedItem,
    setclickedItem,
  };

  return (
    <SelectedItemContext.Provider value={contextValue}>
      {children}
    </SelectedItemContext.Provider>
  );
};
