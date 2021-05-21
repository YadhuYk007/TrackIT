import * as SQLite from "expo-sqlite";

const Select = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  db.transaction((tx) => {
    tx.executeSql("select * from my_table", [], (trans, result) => {
      console.log(trans, result);
    });
  });
};
export default Select;
