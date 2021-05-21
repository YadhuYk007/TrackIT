import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("trackitdb.db");

export const Databasehandler = (description, amount, date, eflag, iflag) => {
  console.log();
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
    );
  });
  db.transaction(function (tx) {
    tx.executeSql(
      "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
      [description, amount, date, eflag, iflag],
      (tx, results) => {
        console.log("Results", results.rowsAffected);
      }
    );
  });
};
