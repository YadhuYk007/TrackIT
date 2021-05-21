import React, { useEffect } from "react";
import { SectionList, Text, View } from "react-native";

const List = () => {
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select sum(amount) as income from transactions where type='income'",
        null,
        (_, results) => {
          console.log("Income>>", results);
          setincome(results.rows._array[0].income);
          setexpense(income - expense);
        }
      );
      tx.executeSql(
        "select sum(amount) as expense from transactions where type='expense'",
        null,
        (_, results) => {
          console.log("expense>>", results);
          setexpense(results.rows._array[0].expense);
        }
      );
    });
  }, [statevar]);
};
export default List;
