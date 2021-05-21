import React, { useRef, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, StatusBar } from "react-native";
import { Modalize } from "react-native-modalize";
import List from "../components/List";
import Add from "../components/Add";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";

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
  const [saveClicked, setSaveClicked] = useState(false);
  const [trigger, settrigger] = useState(0);
  const modalizeRef = useRef(null);
  return (
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar backgroundColor={Colors.yellow} />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      <View style={Style.card}>
        <MainCard statevar={trigger} />
      </View>
      <View style={Style.list}>
        <List invoker={trigger} />
      </View>

      <View style={Style.fab}>
        <Fab onOpen={() => modalizeRef.current?.open()} />
      </View>
      <Modalize ref={modalizeRef} withHandle={false}>
        <Add isClicked={() => setSaveClicked(true)} />
      </Modalize>
      {saveClicked ? modalizeRef.current?.close() : null}
      {saveClicked ? setSaveClicked(false) : null}
      {saveClicked ? settrigger(trigger + 1) : null}
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