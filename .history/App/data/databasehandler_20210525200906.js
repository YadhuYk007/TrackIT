import * as SQLite from "expo-sqlite";

// inserting transaction data
export const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");

  let expType = "";
  if (type === true) {
    expType = "Income";
  } else {
    expType = "Expense";
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
          console.log("Insert Success");
        } else {
          console.log("Insert Failed");
        }
      }
    );
  });
};

// fetching all saved data
export const getData = async ({ db }) => {
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

// deleting a transaction from list
export const deleteData = async ({ db }, id) => {
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

// for updating data from list
export const update = async (
  { db },
  id,
  amount,
  description,
  date,
  typeFlag
) => {
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
