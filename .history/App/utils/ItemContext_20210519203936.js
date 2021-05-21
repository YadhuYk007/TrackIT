import React, { createContext } from "react";

export const itemContext = createContext();

export const contextProvider = ({ listItem }) => {
  const [Item, setItem] = useState({});

  const val = {
    item,
    setItem,
  };
};
