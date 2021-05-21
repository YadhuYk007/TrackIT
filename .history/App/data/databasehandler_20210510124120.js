import React from "react";
import * as SQLite from "expo-sqlite";

const Databasehandler = {
  ShowHideFrequentStax(val, mostusedid) {
    const db = SQLite.openDatabase("trackitdb.db");
    React.useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
        );
      });
    }, []);
  },

  getHideFlag(widgetid) {
    var db = SQLite.openDatabase({
      name: sqllit_Data.name,
      createFromLocation: sqllit_Data.createFromLocation,
    });

    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "SELECT * FROM widget WHERE mostusedwidget= " +
              "'" +
              widgetid +
              "'",
            [],
            (tx, results) => {
              let row = results.rows.item(0);
              let val = row.fieldname;
              console.log("RESULTS>>>>>>>>>>>>>>>>" + JSON.stringify(row));
              console.log("fieldname>>>>>>>>>>>>>>>>" + JSON.stringify(val));
              //alert("Fieldname>>>>>>>" + JSON.stringify(results.rows.item(0)));
              //alert("Value>>>>>>>" + val);

              resolve({ val });
            }
          );
        },
        null,
        null
      );
    });

    db.close();
  },
};

// const Databasehandler = () => {
//   React.useEffect(() => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
//       );
//     });
//   }, []);
//   const operations = {
//     add(desc, amt, date, expflag, incflag) {
//       db.transaction((tx) => {
//         tx.executeSql(
//           "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
//           [desc, amt, date, expflag, incflag]
//         );
//         tx.executeSql("select * from transactions", [], (_, { rows }) =>
//           console.log(JSON.stringify(rows))
//         );
//       }, null);
//     },
//   };
// };

export default Databasehandler;
