import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
  },
  title: {
    margin: 15,
    fontSize: 20,
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
      <Text style={Style.title}> Add Income/Expense</Text>
    </View>
    <View style={Style.header}>
    <Text style={Style.togglebtn}> Income</Text>
    <Text style={Style.togglebtn}> Expense</Text>
  </View>
  );
};

export default Add;
