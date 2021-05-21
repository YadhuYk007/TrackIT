import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ContextProvider = ({ listItem }) => {
  const [items, setItems] = useState(null);
  const val = {
    items,
    setItems,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
