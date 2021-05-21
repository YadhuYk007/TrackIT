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
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  innerChild: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  balanceText: {
    fontSize: 35,
    color: Colors.skyBlue,
    fontWeight: "bold",
  },
  expenseText: {
    fontSize: 35,
    color: Colors.red,
    fontWeight: "bold",
  },
  titles: {},
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text style={Style.titles}>Balance</Text>
        <Text style={Style.balanceText}>5000</Text>
      </View>
      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text style={Style.titles}>Income</Text>
          <Text style={Style.balanceText}>2000</Text>
        </View>
        <View style={Style.innerChild}>
          <Text>Expense</Text>
          <Text style={Style.expenseText}>2000</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
