import * as SQLite from "expo-sqlite";

export const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");

  let expType = "";
  if (type === true) {
    expType = "income";
  } else {
    expType = "expense";
  }
  console.log(description, amount, date, expType);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key autoincrement, amount int, description text, date text,type text);",
      null,
      null
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,type) values (?, ? , ?, ?)",
      [description, amount, date, expType],
      (_, results) => {
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

export const getData = async ({ db }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from transactions group by date(date)",
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};
