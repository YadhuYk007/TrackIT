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
    height: 150,
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
  IncomeText: {
    fontSize: 35,
    color: Colors.green,
    fontWeight: "bold",
  },
  expenseText: {
    fontSize: 35,
    color: Colors.red,
    fontWeight: "bold",
  },
  titles: {
    color: Colors.grey,
  },
  saperator: {
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: "space-around",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text style={Style.titles}>Balance</Text>
        <Text style={Style.balanceText}>{"\u20B9"}5000</Text>
      </View>
      <View style={Style.saperator} />

      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text style={Style.titles}>Income</Text>
          <Text style={Style.IncomeText}>{"\u20B9"}2000</Text>
        </View>
        <View style={Style.innerChild}>
          <Text style={Style.expenseText}>{"\u20B9"}2000</Text>
          <Text style={Style.titles}>Expense</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
