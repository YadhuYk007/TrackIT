import * as SQLite from "expo-sqlite";

const Insert = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, date, type);
  let expType = "";
  type ? (expType = "income") : (expType = "expense");
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key autoincrement, amount int, description text, date text,type text);",
      null,
      (_, results) => {
        console.log("Table Create Log", results);
      }
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,type) values (?, ? , ?, ?)",
      [description, amount, date, type],
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

const Summary = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  db.transaction((tx) => {
    tx.executeSql("select sum(amount) as total,sum(amount) where type='true'");
  });
};

export default Insert;
