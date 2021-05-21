import React, { createContext, useState } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [items, setItems] = useState(null);
  const val = {
    items,
    setItems,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
