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
};

const getDatesNdData=()=>{
  var db = SQLite.openDatabase("trackitdb.db");

return new Promise((resolve, reject) => {
    db.transaction(
        tx => {
            tx.executeSql("select amount,date,description,type from transactions", [], (tx, results) => {

                
                var res = [];
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    var rowObj = {};
                    rowObj.amount = row.amount;
                    rowObj.date = row.date;
                    rowObj.description = row.description;
                    rowObj.type = row.type;                                              
                    res.push(rowObj);
                }

                resolve({ res });


            });
        }, null, null);
});

db.close();
}

    insertuser(dataObj) {
        var db = SQLite.openDatabase({
            name: sqllit_Data.name,
            createFromLocation: sqllit_Data.createFromLocation
        });

        return new Promise((resolve, reject) => {
            db.transaction(
                tx => {
                    tx.executeSql('Delete from account', []);
                    tx.executeSql("insert into account(firstname,lastname,username,eulaid,loginfrom,email,createtime) values " +
                        "(?,?,?,?,?,?,?)", [dataObj.firstname+"", dataObj.lastname+"", dataObj.username+"", dataObj.eulaid+"", dataObj.loginfrom+"", dataObj.email+"", dataObj.createtime], (tx, results) => {
                            if (typeof (results.insertId) == 'number') {
                                resolve({ results });
                            }
                            else {
                                console.error('transaction error: ', JSON.stringify(results));
                            }

                        });
                }, null, (err) => {
                    console.error('transaction error: ', err.message);
                });
        });
        db.close();
    },
    //get user details
    getuser() {
    
        
    },
