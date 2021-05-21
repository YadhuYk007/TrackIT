import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: Color.green,
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
      <View style={Style.togglebtn}>
        <Text> Add Expense/Income</Text>
      </View>
    </View>
  );
};

export default Add;
