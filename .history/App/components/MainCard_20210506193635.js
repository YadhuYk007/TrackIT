import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 12,
    paddingVertical: 65,
    borderWidth: StyleSheet.hairlineWidth,
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
      <Text>Flex Box</Text>
      <Text>Flex Box</Text>
    </SafeAreaView>
  );
};

export default MainCard;
