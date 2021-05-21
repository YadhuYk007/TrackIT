import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ContextProvider = ({ children }) => {
  const [SelectedItem, setSelectedItem] = useState(null);
  const val = {
    SelectedItem,
    setSelectedItem,
  };
  return <ItemContext.Provider value={val}>{children}</ItemContext.Provider>;
};
