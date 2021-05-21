import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import * as SQLite from "expo-sqlite";
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
  },
  IncomeText: {
    fontSize: 35,
    color: Colors.green,
  },
  expenseText: {
    fontSize: 35,
    color: Colors.red,
  },
  titles: {
    color: Colors.lightBlack,
  },
  saperator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    marginVertical: 15,
  },
});

const MainCard = ({ statevar }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [expense, setexpense] = useState(0);
  const [income, setincome] = useState(0);
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select sum(amount) as income from transactions where type='income'",
        null,
        (_, results) => {
          // console.log("Income>>", results);
          setincome(results.rows._array[0].income);
          setexpense(income - expense);
        }
      );
      tx.executeSql(
        "select sum(amount) as expense from transactions where type='expense'",
        null,
        (_, results) => {
          // console.log("expense>>", results);
          setexpense(results.rows._array[0].expense);
        }
      );
    });
  }, [statevar]);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text style={Style.titles}>Balance</Text>
        <Text style={Style.balanceText}>
          {"\u20B9"}
          {income - expense}
        </Text>
      </View>
      <View style={Style.saperator} />

      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text style={Style.titles}>Income</Text>
          <Text style={Style.IncomeText}>
            {"\u20B9"}
            {income}
          </Text>
        </View>
        <View style={Style.innerChild}>
          <Text style={Style.expenseText}>
            {"\u20B9"}
            {expense}
          </Text>
          <Text style={Style.titles}>Expense</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
