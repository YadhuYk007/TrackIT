import * as SQLite from "expo-sqlite";

export const Databasehandler = (description, amount, date, type) => {
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
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select amount,date,description,type from transactions",
          [],
          (tx, results) => {
            const res = [];
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              const rowObj = {};
              rowObj.amount = row.amount;
              rowObj.date = row.date;
              rowObj.description = row.description;
              rowObj.type = row.type;
              res.push(rowObj);
            }

            resolve({ res });
          }
        );
      },
      null,
      null
    );
  db.close();
};

const getDatesNdData = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select amount,date,description,type from transactions",
          [],
          (tx, results) => {
            const res = [];
            const len = results.rows.length;
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              const rowObj = {};
              rowObj.amount = row.amount;
              rowObj.date = row.date;
              rowObj.description = row.description;
              rowObj.type = row.type;
              res.push(rowObj);
            }

            resolve({ res });
          }
        );
      },
      null,
      null
    );
    db.close();
  });
};
