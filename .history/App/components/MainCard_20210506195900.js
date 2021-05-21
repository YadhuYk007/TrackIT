import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderRadius: 12,
    paddingVertical: 95,
    borderWidth: StyleSheet.hairlineWidth,
  },
  child: {
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
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
      <Text style={Style.child}>Flex Box</Text>
    </SafeAreaView>
  );
};

export default MainCard;
