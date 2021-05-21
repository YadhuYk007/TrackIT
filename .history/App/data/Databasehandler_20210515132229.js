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
  db.close();
};

const getDatesNdData = () => {
  let db = SQLite.openDatabase("trackitdb.db");
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select amount,date,description,type from transactions",
          [],
          (tx, results) => {
            let res = [];
            let len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              let rowObj = {};
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
  });
  db.close();
};
