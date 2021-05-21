import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  console.log(items.rows._array[0]);

  return null;
};
export default List;
