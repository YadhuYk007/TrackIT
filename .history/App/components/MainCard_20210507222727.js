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
  banalceText: {
    fontSize: 35,
    color: Colors.skyBlue,
    position: "absolute",
  },
  expenseText: {
    fontSize: 35,
    color: Colors.red,
  },
  first: {
    flexDirection: "column",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text>Balance</Text>
        <Text style={Style.banalceText}>5000</Text>
      </View>
      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text>Income</Text>
          <Text style={Style.banalceText}>2000</Text>
        </View>
        <View style={Style.innerChild}>
          <Text>Expense</Text>
          <Text style={Style.expenseText}>2000</Text>
        </View>
      </View>

      {/* <View style={Style.innerChild}>
        <Text style={Style.child}>Income</Text>
        <Text style={Style.banalceText}>5000</Text>
        <Text style={Style.child}>Expense</Text>
        <Text style={Style.expenseText}>5000</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default MainCard;
