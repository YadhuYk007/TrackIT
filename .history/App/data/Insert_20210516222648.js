import * as SQLite from "expo-sqlite";

const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, date, type);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text,type text);",
      null,
      (tx, results) => {
        console.log("Table Created", results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log("Table Created");
        } else {
          console.log("Table Create Failed");
        }
      }
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,type) values (?, ? , ?, ?)",
      [description, amount, date, type],
      (tx, results) => {
        console.log("Results", results.rowsAffected);
        if (results.rowsAffected > 0) {
          console.log("Insert Sucess");
        } else {
          console.log("Insert Failed");
        }
      }
    );
  });
};

export default Insert;
