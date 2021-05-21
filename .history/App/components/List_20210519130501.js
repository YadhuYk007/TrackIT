import React, { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";
import { getData } from "../data/databasehandler";

const List = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  useEffect(() => {
    getData({ db });
  }, []);

  return null;
};
export default List;
