import React, { useRef } from "react";
import { SafeAreaView, Text, StyleSheet, View, StatusBar } from "react-native";
import { Modalize } from "react-native-modalize";
import Add from "../components/Add";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";
import Select from "../data/Select";

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
        <Add />
      </Modalize>
      {/* <View>
        <Select />
      </View> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
