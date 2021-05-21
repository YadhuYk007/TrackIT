import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
    borderRadius: 12,
  },
});

const Edit = (props) => {
  console.log(JSON.stringify(props));
  const [amount, setAmt] = useState("");
  const [activeflag, setactiveflag] = useState(false);
  const [description, setDesc] = useState("");
  const [date, setDate] = useState("");
  setDate(props.date);
  setAmt(props.amt);
  setDesc(props.desc);
  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}> Edit Income/Expense</Text>
      </View>
      <View style={Style.toggle}>
        {/* <TouchableOpacity onPress={() => setactiveflag(true)}> */}
        <Text
        // style={[
        //   props.type === "Income" ? Style.togglebtnOn : Style.togglebtnOff,
        // ]}
        >
          {" "}
          Income
        </Text>
        {/* </TouchableOpacity>
        <TouchableOpacity onPress={() => setactiveflag(false)}> */}
        <Text
        // style={[
        //   props.type === "Expense" ? Style.togglebtnOn : Style.togglebtnOff,
        // ]}
        >
          {" "}
          Expense
        </Text>
        {/* </TouchableOpacity> */}
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
        <TouchableOpacity onPress={() => props.onClose()}>
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Edit;
