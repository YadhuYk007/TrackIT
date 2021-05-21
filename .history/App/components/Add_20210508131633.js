import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  sheetContainer: {
    flexDirection: "column",
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
    <View style={Style.header}>
      {/* <View style={Style.header}>
        <Text> Add Expense/Income</Text>
      </View> */}
      <View style={Style.toggle}>
        <Text>Add Expense/Income</Text>
      </View>
      <View style={Style.textboxes}>
        <Text>Add Expense/Income</Text>
      </View>
    </View>
  );
};

export default Add;
