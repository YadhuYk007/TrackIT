import React, { useState, Alert } from "react";
import * as SQLite from "expo-sqlite";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Color from "../constants/Colors";

const db = SQLite.openDatabase("trackitdb.db");

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
    marginHorizontal: 80,
    borderRadius: 15,
  },
  togglebtnOn: {
    color: Color.yellow,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
  },
  togglebtnOff: {
    color: Color.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
  },
  textboxes: {
    backgroundColor: Color.white,
    flexDirection: "column",
    height: 450,
    marginTop: 15,
  },
  input: {
    margin: 15,
    height: 45,
    borderColor: Color.grey,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 8,
    color: Color.lightBlack,
  },
  saperator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.lightBlack,
    height: 55,
  },
  save: {
    paddingVertical: 15,
    alignContent: "center",
    color: Color.yellow,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

const Add = () => {
  const [amount, setAmt] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [iflag, setiflag] = useState("0");
  const [eflag, seteflag] = useState("0");
  const addTransaction = () => {
    console.log(amount, description, date);

    if (!amount) {
      alert("Please enter amount");
      return;
    }
    if (!description) {
      alert("Please fill description");
      return;
    }
    if (!date) {
      alert("Please fill Date");
      return;
    }
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists transactions (id integer primary key not null, amount int, description text, date text, expenseflag text , incomeflag text);"
      );
    });
    db.transaction(function (tx) {
      tx.executeSql(
        "insert into transactions (description, amount,date,expenseflag,incomeflag) values (?, ? , ?, ?, ?)",
        [description, amount, date, eflag, iflag],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert("Success", { cancelable: false });
          } else alert("Registration Failed");
        }
      );
    });
  };

  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Add Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        <TouchableOpacity onPress={(setiflag("1"), seteflag("0"))}>
          <Text style={Style.togglebtnOn}> Income</Text>
        </TouchableOpacity>
        <View style={Style.saperator} />
        <TouchableOpacity onPress={(seteflag("1"), setiflag("0"))}>
          <Text style={Style.togglebtnOff}> Expense</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.textboxes}>
        <TextInput
          style={Style.input}
          onChangeText={setAmt}
          value={amount}
          placeholder="Amount"
        />
        <TextInput
          style={Style.input}
          onChangeText={setDesc}
          value={description}
          placeholder="Description"
        />
        <TextInput
          style={Style.input}
          onChangeText={setDate}
          value={date}
          placeholder="Date"
        />

        <TouchableOpacity onPress={() => addTransaction()}>
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Add;
