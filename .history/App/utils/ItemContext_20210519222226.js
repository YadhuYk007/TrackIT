import React, { createContext, useState } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [item, setItem] = useState({});

  const val = {
    item,
    setItem,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
