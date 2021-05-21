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

const MainCard = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [total, settotal] = useState(0);
  const [expense, setexpense] = useState(0);
  const [income, setincome] = useState(0);
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "select sum(amount) as total from transactions",
        null,
        (_, results) => {
          console.log(results);
        }
      );
      tx.executeSql(
        "select sum(amount) as income from transactions where type='income'",
        null,
        (_, results) => {
          console.log(results);
        }
      );
      tx.executeSql(
        "select sum(amount) as expense from transactions where type='expense'",
        null,
        (_, results) => {
          console.log(results);
        }
      );
    });
  }, []);
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.child}>
        <Text style={Style.titles}>Balance</Text>
        <Text style={Style.balanceText}>
          {"\u20B9"}
          {total}
        </Text>
      </View>
      <View style={Style.saperator} />

      <View style={Style.child}>
        <View style={Style.innerChild}>
          <Text style={Style.titles}>Income</Text>
          <Text style={Style.IncomeText}>
            {"\u20B9"}
            {expense}
          </Text>
        </View>
        <View style={Style.innerChild}>
          <Text style={Style.expenseText}>
            {"\u20B9"}
            {income}
          </Text>
          <Text style={Style.titles}>Expense</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
