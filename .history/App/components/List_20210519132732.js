import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { getData } from "../data/databasehandler";

const List = () => {
  const db = SQLite.openDatabase("trackitdb.db");

  useEffect(() => {
    getData({ db }).then((_array) => {
      //console.log(_array);
      const dateArr = [];
      _array.forEach((element) => {
        console.log(element.date);
        dateArr.push({ title: element.date, data: element });
        console.log("dateArr>>", dateArr);
      });
    });
  }, []);
  return null;
};
export default List;
