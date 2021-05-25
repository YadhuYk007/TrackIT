import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as SQLite from "expo-sqlite";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "react-native-simple-toast";
import { AntDesign } from "@expo/vector-icons";
import Color from "../constants/Colors";
import { update } from "../data/databasehandler";

const Edit = (props) => {
  console.log(JSON.stringify(props));
  const db = SQLite.openDatabase("trackitdb.db");
  const editTxt = "Edit ";
  const [amount, setAmt] = useState(props.amt.toString());
  const [description, setDescription] = useState(props.desc);
  const [activeFlag, setActiveFlag] = useState(props.toggle);
  const [date, setDate] = useState(dayjs(props.date).format("MMMM D, YYYY"));
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <View>
      <Text style={Style.header}>
        {editTxt}
        {props.type}
      </Text>

      <View style={Style.close}>
        <TouchableOpacity onPress={() => props.close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Custom Toggle for Type */}
      <View style={Style.toggle}>
        <TouchableOpacity onPress={() => setActiveFlag(true)}>
          <Text
            style={[activeFlag ? Style.toggleButtonOn : Style.toggleButtonOff]}
          >
            {" "}
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveFlag(false)}>
          <Text
            style={[activeFlag ? Style.toggleButtonOff : Style.toggleButtonOn]}
          >
            {" "}
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.textBoxes}>
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
        <TouchableOpacity
          style={Style.input}
          onPress={() => {
            setShowDatePicker(true);
          }}
        >
          <Text style={Style.DateText}>{JSON.stringify(date)}</Text>
        </TouchableOpacity>
        {showDatePicker ? (
          <DateTimePicker
            testID="dateTimePicker"
            value={new Date(date)}
            mode="date"
            display="default"
            onChange={(e, selectedDate) => {
              const currentDate =
                dayjs(selectedDate).format("MMMM D, YYYY") || date;
              console.log(currentDate);
              setDate(currentDate);
              setShowDatePicker(false);
            }}
          />
        ) : null}

        <TouchableOpacity
          onPress={() => {
            if (amount === "" || amount === null) {
              Toast.show("Please enter Amount");
            } else if (description === "" || description === null) {
              Toast.show("Please enter Description");
            } else {
              // Toast.show("Valid Data");
              props.close();
              update({ db }, props.id, amount, description, date, activeflag);
            }
          }}
        >
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Style = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Color.lightBlack,
    fontSize: 18,
  },
  close: {
    alignSelf: "flex-end",
    right: 16,
    top: 16,
    position: "absolute",
  },
  textBoxes: {
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
  separator: {
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
  dateText: {
    color: Color.lightBlack,
    marginVertical: 8,
  },
  toggle: {
    marginVertical: 30,
    flexDirection: "row",
    alignSelf: "center",
    marginHorizontal: 80,
  },
  toggleButtonOff: {
    color: Color.yellow,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
  },
  toggleButtonOn: {
    color: Color.white,
    backgroundColor: Color.yellow,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 6,
    borderRadius: 12,
  },
});
export default Edit;
