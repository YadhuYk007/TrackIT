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

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql("select * from transactions", null, (_, results) => {
        console.log(results);
      });
    });
  }, []);
  const modalizeRef = useRef(null);
  return (
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar backgroundColor={Colors.yellow} />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      <View style={Style.card}>
        <MainCard statevar={saveClicked} />
      </View>
      <Text style={Style.list}>List</Text>
      <View style={Style.fab}>
        <Fab onOpen={() => modalizeRef.current?.open()} />
      </View>
      <Modalize ref={modalizeRef} withHandle={false}>
        <Add isClicked={() => setSaveClicked(true)} />
      </Modalize>
      {saveClicked ? modalizeRef.current?.close() : null}
      {/* {saveClicked ? setSaveClicked(false) : null} */}
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
