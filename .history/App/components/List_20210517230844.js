import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [items, setitems] = useState[null];
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          setitems(results.rows._array);
          console.log("Income>>", JSON.stringify(items));
          console.log(items);
        }
      );
      tx.executeSql("select * from transactions where da");
    });
  }, [invoker]);
  return null;
};
export default List;
