import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { SafeAreaView, SectionList } from "react-native";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [items, setitems] = useState(null);
  const [data, setdata] = useState(null);
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          setitems(results.rows._array);
          console.log("Income>>", JSON.stringify(items));
        }
      );
      tx.executeSql(
        "select * from transactions order by date(date) desc",
        null,
        (_, results) => {
          setdata(results.rows._array);
          console.log(JSON.stringify(data));
        }
      );
    });
  }, [invoker]);
  return (
    <SafeAreaView>
      <SectionList></SectionList>
    </SafeAreaView>
  );
};
export default List;
