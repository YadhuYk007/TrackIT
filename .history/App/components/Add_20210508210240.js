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
    marginHorizontal: 110,
  },
  righttogglebtn: {
    alignItems: "center",
    padding: 10,
    color: Color.white,
    width: 20,
    borderTopLeftRadius: 15,
    height: 45,
    justifyContent: "center",
    flex: 6,
    backgroundColor: Color.paleRed,
  },
  leftttogglebtn: {
    alignItems: "center",
    padding: 10,
    color: Color.white,
    width: 20,
    borderTopRightRadius: 30,
    height: 45,
    justifyContent: "center",
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
        <Text style={Style.righttogglebtn}> Income</Text>
        <Text style={Style.leftttogglebtn}> Expense</Text>
      </View>
    </SafeAreaView>
  );
};

export default Add;
