import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TextInputComponent,
} from "react-native";
import Color from "../constants/Colors";

import { Databasehandler } from "../data/Databasehandler";

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
  togglebtnOff: {
    color: Color.yellow,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
  },
  togglebtnOn: {
    color: Color.white,
    backgroundColor: Color.yellow,
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

  income  () {
    return iflag ? Style.togglebtnOn : Style.togglebtnOff;
  };

  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Add Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        <TouchableOpacity>
          <Text
            onPress={(() => setiflag("1"), seteflag("0"))}
            style={() => income()}
          >
            {" "}
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            onPress={(() => setiflag("0"), seteflag("1"))}
            style={() => expense()}
          >
            {" "}
            Expense
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Style.textboxes}>
        <TextInput
          style={Style.input}
          keyboardType="number-pad"
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

        <TouchableOpacity
          onPress={() => {
            Databasehandler(description, amount, date, eflag, iflag);
          }}
        >
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Add;
