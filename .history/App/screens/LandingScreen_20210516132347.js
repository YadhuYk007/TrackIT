import React, { useRef, useState } from "react";
import * as SQLite from "expo-sqlite";
import { SafeAreaView, Text, StyleSheet, View, StatusBar } from "react-native";
import { Modalize } from "react-native-modalize";
import Add from "../components/Add";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";
// import dayjs from "dayjs";

const Style = StyleSheet.create({
  maincontainer: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  header: {
    flex: 0.8,
    backgroundColor: Colors.yellow,
    color: Colors.white,
    fontSize: 25,
    alignItems: "center",
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: Colors.white,
  },
  card: {
    flex: 2,
  },
  list: {
    flex: 6,
  },
  fab: {
    alignItems: "center",
  },
});

const LandingScreen = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [saveClicked, setSaveClicked] = useState(false);
  const temp = [];

  Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          "select firstname,lastname,username,eulaid,loginfrom,email from account",
          [],
          (tx, results) => {
            const res = [];
            const len = results.rows.length;
            for (let i = 0; i < len; i + 1) {
              let row = results.rows.item(i);
              var rowObj = {};
              rowObj.firstname = row.firstname;
              rowObj.lastname = row.lastname;
              rowObj.username = row.email;
              rowObj.eulaid = row.eulaid;
              //console.log("row.email====>>"+row.email);
              //alert("row.email====>>"+row.email);
              if (
                row.email == "" ||
                row.email == undefined ||
                row.email == "undefined"
              )
                rowObj.username = rowObj.firstname + " " + rowObj.lastname;

              // console.log("rowObj.username====>>"+JSON.stringify(rowObj));
              //alert("rowObj.username====>>"+JSON.stringify(rowObj));

              res.push(rowObj);
            }

            resolve({ res });
          }
        );
      },
      null,
      null
    );
  });

  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM transactions", [], (results) => {
      for (let i = 0; i < results.rows.length; i + 1)
        temp.push(results.rows.item(i));
    });
  });
  console.log(JSON.stringify(temp));

  const modalizeRef = useRef(null);
  return (
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar backgroundColor={Colors.yellow} />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      <View style={Style.card}>
        <MainCard />
      </View>
      <Text style={Style.list}>List</Text>
      <View style={Style.fab}>
        <Fab onOpen={() => modalizeRef.current?.open()} />
      </View>
      <Modalize ref={modalizeRef}>
        <Add isClicked={() => setSaveClicked(true)} />
      </Modalize>
      {saveClicked ? modalizeRef.current?.close() : null}
      {saveClicked ? setSaveClicked(false) : null}
    </SafeAreaView>
  );
};

// const dateFormat = (date) => {
//   if (date === dayjs(date).format("MMMM D, YYYY")) {
//     return "Today";
//   } else {
//     return date;
//   }
// };
export default LandingScreen;
