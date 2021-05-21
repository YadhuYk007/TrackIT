import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  child: {
    height: 200,
    flex: 1,
  },
  innerChild: {
    flex: 1,
    flexDirection: "column",
  },
  banalceText: {
    fontSize: 16,
    color: Colors.skyBlue,
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Balance</Text>
      <Text>5000</Text>
      <View style={Style.innerChild}>
        <Text style={Style.child}>Income</Text>
        <Text style={Style.child}>Expense</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
