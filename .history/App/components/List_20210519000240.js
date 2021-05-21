import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [items, setitems] = useState(null);
  const [data, setdata] = useState(null);
  const [keyArr, setkeyArr] = useState(null);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          setitems(results.rows._array);
          console.log("Length>>", results.rows.length);
          console.log("Income>>", JSON.stringify(items));
        }
      );
      tx.executeSql(
        "select * from transactions order by date(date) desc",
        null,
        (_, results) => {
          setdata(results.rows._array);
          console.log("data Length>>", results.rows.length);
          console.log(JSON.stringify(data));
        }
      );
    });
  }, [invoker]);
  for (i = 0; i < items.length; i + 1) {}
  return null;
};
export default List;
