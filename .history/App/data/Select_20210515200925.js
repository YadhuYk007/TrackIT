import * as SQLite from "expo-sqlite";

const Select = () => {
  try{}catch(e){ console.log(e) alert("select error")}
  const db = SQLite.openDatabase("trackitdb.db");
  db.transaction((tx) => {
    tx.executeSql("select * from my_table", [], (trans, result) => {
      console.log(trans, result);
    });
  });
};
export default Select;
