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
          for (let i = 0; i < results.rows.length; i + 1) {
            console.log(JSON.stringify(results.rows._array.Objecy[i]));
          }
          console.log(JSON.stringify(results.rows._array[0]));
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
  // console.log(keyArr));
  // for (let i = 0; i < JSON.stringify(items).length; i + 1) {
  //   keyArr.push(items[i].date);
  // }
  // console.log("KEY ARRAY>>>>", keyArr);
  return null;
};
export default List;