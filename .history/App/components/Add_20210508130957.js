import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  sheetContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.blue,
  },
  header: {
    flex: 1,
    backgroundColor: Color.green,
  },
  toggle: {
    flex: 6,
    backgroundColor: Color.paleRed,
  },
  textboxes: {
    flex: 3,
    backgroundColor: Color.grey,
  },
});

const Add = () => {
  return (
    <View style={Style.sheetContainer}>
      <Text style={Style.header}> Add Expense/Income</Text>
      <Text style={Style.toggle}>Add Expense/Income</Text>
      <Text style={Style.textboxes}>Add Expense/Income</Text>
    </View>
  );
};

export default Add;
