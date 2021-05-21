import React, { createContext } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [Item, setItem] = useState({});

  const val = {
    item,
    setItem,
  };
  return <itemContext.Provider value={val}>{listItem}</itemContext.Provider>;
};
