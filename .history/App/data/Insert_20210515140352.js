import * as SQLite from "expo-sqlite";

export const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, date, type);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text,type text);"
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,type) values (?, ? , ?, ?)",
      [description, amount, date, type]
    );
  });
  db.close();
};
