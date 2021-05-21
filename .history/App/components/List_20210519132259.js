import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { getData } from "../data/databasehandler";

const List = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  const dates = [];
  useEffect(() => {
    getData({ db }).then((_array) => {
      console.log(_array);
      _array.forEach((element) => {
        //console.log(element.date);
        //dates.push({ title: element.date, data: element });
      });
    });
  }, []);
  console.log("date array>>", dates);
  return null;
};
export default List;
