import React, { useEffect } from "react";
import { SectionList, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select date from transactions order by date(date) desc",
        null,
        (_, results) => {
          console.log("Income>>", results);
          setincome(results.rows._array[0].income);
          setexpense(income - expense);
        }
      );
    });
  }, [invoker]);
};
export default List;
