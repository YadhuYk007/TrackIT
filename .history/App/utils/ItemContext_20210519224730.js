import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const val = {
    items,
    setItems,
  };
  return <ItemContext.Provider value={val}>{children}</ItemContext.Provider>;
};
