import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { SafeAreaView, SectionList } from "react-native";

const List = ({ invoker }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  //   const [items, setitems] = useState(null);
  //   const [data, setdata] = useState(null);
  let dates = [];
  let data = [];
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select distinct date from transactions order by date(date) desc",
        null,
        (_, results) => {
          dates = JSON.stringify(results.rows._array);
          console.log(dates);
        }
      );
      tx.executeSql(
        "select * from transactions order by date(date) desc",
        null,
        (_, results) => {
          data = JSON.stringify(results.rows._array);
          console.log(data);
        }
      );
    });
  }, [invoker]);
  return (
    <SafeAreaView>
      <SectionList>
        sections=
        {[
          { title: "Section Head For Data A" },
          { title: "Section Head For Data B" },
          { title: "Section Head For Data C" },
        ]}
      </SectionList>
    </SafeAreaView>
  );
};
export default List;
