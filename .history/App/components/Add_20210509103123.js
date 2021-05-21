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
    marginHorizontal: 80,
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
    backgroundColor: Color.white,
    flexDirection: "column",
    height: 450,
    marginTop: 15,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: Color.grey,
    borderWidth: 1,
    color: Color.lightBlack,
  },
  saperator: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Color.grey,
    marginVertical: 15,
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
        <View style={Style.saperator} />
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