import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    borderRadius: 25,
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: StyleSheet.hairlineWidth,
    paddingTop: 90,
    paddingBottom: 90,
    color: Colors.white,
  },
  children: {
    flex: 1,
    flexDirection: "column",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Flex Box</Text>
    </SafeAreaView>
  );
};

export default MainCard;
