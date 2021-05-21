import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const items = [];
  const data = [];
  const keyArr = [];
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          console.log(JSON.stringify(results.rows._array[1]));
          //items.push(results.rows._array);
        }
      );
      tx.executeSql(
        "select * from transactions order by date(date) desc",
        null,
        (_, results) => {
          data.push(results.rows._array);
        }
      );
    });
  }, [invoker]);
  // for (let i = 0; i < items[0].length; i + 1) {
  //   console.log(items[i]);
  //   keyArr.push(items[i]);
  // }
  console.log("KEY ARRAY IS>>", keyArr);
  return null;
};
export default List;
