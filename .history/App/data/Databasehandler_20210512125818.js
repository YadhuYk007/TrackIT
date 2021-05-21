import * as SQLite from "expo-sqlite";

export const Databasehandler = (description, amount, date, eflag, iflag) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, date);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
      [description, amount, date, eflag, iflag]
    );
  });
};
