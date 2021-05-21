import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
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
  toggle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 110,
    backgroundColor: Color.yellow,
  },
  togglebtn: {
    alignItems: "center",
    padding: 10,
    color: Color.white,
    width: 20,
    borderRadius: 30,
    height: 55,
    flex: 6,
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
        <Text style={Style.togglebtn}> Income</Text>
        <Text style={Style.togglebtn}> Expense</Text>
      </View>
    </SafeAreaView>
  );
};

export default Add;