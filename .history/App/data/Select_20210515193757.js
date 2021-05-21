import * as SQLite from "expo-sqlite";

const Select = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  return new Promise((resolve) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select amount,date,description,type from transactions",
          [],
          (results) => {
            const res = [];
            const len = results.rows.length;
            for (let i = 0; i < len; i + 1) {
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
export default Select;
