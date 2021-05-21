import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  sheetContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.blue,
  },
  header: {},
  toggle: {},
  textboxes: {},
});

const Add = () => {
  return (
    <View style={Style.sheetContainer}>
      <Text>Add Expense/Income</Text>
    </View>
  );
};

export default Add;
