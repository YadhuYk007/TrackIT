import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
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
  DatePickerStyle: {
    marginVertical: 10,
    borderColor: "#d4d4d4",
    padding: 9,
    borderRadius: 8,
    borderWidth: 1,
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
          <Text style={[activeflag ? Style.togglebtnOff : Style.togglebtnOn]}>
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
        <TouchableWithoutFeedback
          onPress={() => {
            <DateTimePicker
              testID="dateTimePicker"
              value={dayjs(date).toDate()}
              mode="date"
              display="default"
              onChange={(e, selectedDate) => {
                setDate(alert(selectedDate));
              }}
            />;
          }}
        >
          <Text style={Style.input}>Date</Text>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={() => {
            Databasehandler(description, amount, date, activeflag);
          }}
        >
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Add;
