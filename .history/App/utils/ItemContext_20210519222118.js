import React, { createContext, useState } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [Item, setItem] = useState({});

  const val = {
    Item,
    setItem,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
