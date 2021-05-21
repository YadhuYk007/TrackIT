import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [items, setitems] = useState(null);
  const [data, setdata] = useState(null);
  const keyArr = [];
  const datArr = null;
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          // for (let i = 0; i < results.rows.length; i + 1) {
          //   console.log(JSON.stringify(results.rows._array[i]));
          // }
          setitems(results);
          //console.log(JSON.stringify(results.rows._array[0]));
        }
      );
      tx.executeSql(
        "select * from transactions order by date(date) desc",
        null,
        (_, results) => {
          setdata(results.rows._array);
        }
      );
    });
  }, [invoker]);
  console.log(items.rows);
  // for (let i = 0; i < data.items.rows.length; i + 1) {
  //   keyArr.push(data.items.rows._array[i]);
  // }
  // console.log("KEY ARRAY>>>>", keyArr);
  return null;
};
export default List;
