import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import * as SQLite from "expo-sqlite";
import Colors from "../constants/Colors";

const MainCard = ({ statevar }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const [expense, setExpense] = useState(0);

  const [income, setIncome] = useState(0);

  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select sum(amount) as income from transactions where type='Income' or type='income'",
        null,
        (_, results) => {
          setIncome(
            results.rows._array[0].income > 0
              ? results.rows._array[0].income
              : 0
          );
          setExpense(income - expense);
        }
      );
      tx.executeSql(
        "select sum(amount) as expense from transactions where type='Expense' or type='expense'",
        null,
        (_, results) => {
          setExpense(
            results.rows._array[0].expense > 0
              ? results.rows._array[0].expense
              : 0
          );
        }
      );
    });
  }, [statevar]);

  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text style={Style.titles}>Balance</Text>
        <Text style={Style.balanceText}>{`$${income - expense}`}</Text>
      </View>

      <View style={Style.separator} />

      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text style={Style.titles}>Income</Text>
          <Text style={Style.IncomeText}>{`$${income}`}</Text>
        </View>

        <View style={Style.innerChild}>
          <Text style={Style.expenseText}>{`$${expense}`}</Text>
          <Text style={Style.titles}>Expense</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  separator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
    marginVertical: 15,
  },
});
export default MainCard;
