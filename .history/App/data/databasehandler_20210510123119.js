import React from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("trackitdb.db");

function Databasehandler() {
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
      );
    });
  }, []);
  add = (desc, amt, date, expflag, incflag) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
        [desc, amt, date, expflag, incflag]
      );
      tx.executeSql("select * from transactions", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    }, null);
  };
}

export default Databasehandler;
