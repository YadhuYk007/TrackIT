import React, { useEffect } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select date from transactions order by date(date) desc",
        null,
        (_, results) => {
          console.log("Income>>", results);
        }
      );
    });
  }, [invoker]);
  return null;
};
export default List;
