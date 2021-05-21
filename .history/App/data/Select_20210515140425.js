import * as SQLite from "expo-sqlite";

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
