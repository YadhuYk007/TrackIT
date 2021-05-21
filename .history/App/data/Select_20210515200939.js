import * as SQLite from "expo-sqlite";

const Select = () => {
  try {
    const db = SQLite.openDatabase("trackitdb.db");
    db.transaction((tx) => {
      tx.executeSql("select * from my_table", [], (trans, result) => {
        console.log(trans, result);
      });
    });
  } catch (e) {
    console.log(e);
    alert("select error");
  }
};
export default Select;
