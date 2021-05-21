import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    height: 100,
    alignContent: "center",
  },
  title: {
    fontSize: 25,
  },
  togglebtn: {
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
      <Text style={Style.title}> Add Expense/Income</Text>
    </View>
  );
};

export default Add;
