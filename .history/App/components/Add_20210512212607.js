import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-date-picker";
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
  const [activeflag, setactiveflag] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Add Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        <TouchableOpacity onPress={() => setactiveflag(true)}>
          <Text style={[activeflag ? Style.togglebtnOn : Style.togglebtnOff]}>
            {" "}
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setactiveflag(false)}>
          <Text style={[activeflag ? Style.togglebtnOn : Style.togglebtnOff]}>
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
        <DatePicker date={date} onDateChange={setDate} />

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
