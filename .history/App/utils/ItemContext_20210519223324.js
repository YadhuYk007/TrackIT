import React, { createContext, useState } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [items, setItems] = useState({});
  const val = {
    items,
    setItems,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
