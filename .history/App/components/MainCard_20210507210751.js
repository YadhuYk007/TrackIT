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
    borderWidth: StyleSheet.hairlineWidth,

    flex: 1,
  },
  innerChild: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,

    flexDirection: "column",
  },
  banalceText: {
    fontSize: 35,
    color: Colors.skyBlue,
    position: "absolute",
  },
  expenseText: {
    fontSize: 35,
    color: Colors.paleRed,
  },
  first: {
    flexDirection: "column",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Balance</Text>
      <Text style={Style.banalceText}>5000</Text>

      <View style={Style.innerChild}>
        <Text style={Style.child}>Income</Text>
        <Text style={Style.banalceText}>5000</Text>
        <Text style={Style.child}>Expense</Text>
        <Text style={Style.expenseText}>5000</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
