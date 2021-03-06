import * as SQLite from "expo-sqlite";
import Toast from "react-native-simple-toast";

export const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");

  let expType = "";
  if (type === true) {
    expType = "Income";
  } else {
    expType = "Expense";
  }
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
        if (results.rowsAffected > 0) {
          Toast.show("Added");
        } else {
          Toast.show("Error occurred...Please try again");
        }
      }
    );
  });
};

export const getData = ({ db }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select * from transactions order by date desc",
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

export const deleteData = ({ db }, id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "delete from transactions where id=?",
        [id],
        () => {
          resolve("Entry Deleted");
        },
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const update = ({ db }, id, amount, description, date, typeFlag) => {
  let expenseType = "";
  if (typeFlag === true) {
    expenseType = "Income";
  } else {
    expenseType = "Expense";
  }
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "update transactions set amount=?,description=?,date=?,type=? where id = ? ",
        [amount, description, date, expenseType, id],
        () => {
          resolve("Removed");
        },
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};
