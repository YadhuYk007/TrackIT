import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Color from "../constants/Colors";
import Toggle from "./togglebtn";

const Style = StyleSheet.create({
  header: {
    height: 100,
    alignItems: "center",
  },
  title: {
    margin: 15,
    fontSize: 20,
  },
  toggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  togglebtn: {
    padding: 10,
    color: Color.white,
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
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Add Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        <Toggle />
        {/* <Text style={Style.togglebtn}> Income</Text>
        <Text style={Style.togglebtn}> Expense</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default Add;