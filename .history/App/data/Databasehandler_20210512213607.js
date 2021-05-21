import * as SQLite from "expo-sqlite";

export const Databasehandler = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, type);
  let eflag = 0;
  let iflag = 0;
  type ? (iflag = 1) : (eflag = 1);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text,type text);"
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
      [description, amount, date, eflag, iflag]
    );
  });
};
