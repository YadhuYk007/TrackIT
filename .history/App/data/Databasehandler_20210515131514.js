import * as SQLite from "expo-sqlite";

export const Databasehandler = (description, amount, date, type) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(description, amount, date, type);
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists transactions (id integer primary key not null, amount int, description text, date text,type text);"
    );
    tx.executeSql(
      "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?)",
      [description, amount, date, type]
    );
  });
};

const getDatesNdData=()=>{
  var db = SQLite.openDatabase("trackitdb.db");

return new Promise((resolve, reject) => {
    db.transaction(
        tx => {
            tx.executeSql("select firstname,lastname,username,eulaid,loginfrom,email from account", [], (tx, results) => {

                
                var res = [];
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    var rowObj = {};
                    rowObj.firstname = row.firstname;
                    rowObj.lastname = row.lastname;
                    rowObj.username = row.email;
                    rowObj.eulaid = row.eulaid;
                    //console.log("row.email====>>"+row.email); 
                    //alert("row.email====>>"+row.email);                                                
                    if (row.email == "" || row.email == undefined || row.email == 'undefined')
                        rowObj.username = rowObj.firstname + " " + rowObj.lastname;

                    // console.log("rowObj.username====>>"+JSON.stringify(rowObj)); 
                    //alert("rowObj.username====>>"+JSON.stringify(rowObj)); 

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
