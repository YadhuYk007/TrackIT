import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
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
    marginHorizontal: 90,
    backgroundColor: Color.yellow,
    borderRadius: 15,
  },
  togglebtn: {
    color: Color.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
  },
  textboxes: {
    backgroundColor: Color.grey,
    flexDirection: "column",
    height: 140,
  },
  input: {
    height: 15,
    color: Color.grey,
  },
});

const Add = () => {
  const [amount, setAmt] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");
  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Add Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        <Text style={Style.togglebtn}> Income</Text>
        <Text style={Style.togglebtn}> Expense</Text>
      </View>
      <View style={Style.textboxes}>
        <TextInput style={Style.input} onChangeText={setAmt} value={amount} />
        <TextInput
          style={Style.input}
          onChangeText={setDesc}
          value={description}
        />
        <TextInput style={Style.input} onChangeText={setDate} value={date} />
      </View>
    </SafeAreaView>
  );
};

export default Add;
