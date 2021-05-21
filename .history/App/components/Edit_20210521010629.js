import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "react-native-simple-toast";
import { AntDesign } from "@expo/vector-icons";
import Color from "../constants/Colors";

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
});

const Edit = (props) => {
  console.log(JSON.stringify(props));
  const editTxt = "Edit ";
  const [amount, setAmt] = useState("");
  const [description, setDesc] = useState("");
  const [activeflag, setactiveflag] = useState(false);
  const [date, setDate] = useState(dayjs().format("MMMM D, YYYY"));
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View>
      <Text style={Style.header}>
        {editTxt}
        {props.type}
      </Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => props.close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>

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
              Toast.show("Valid Data");
              // Insert(description, amount, date, activeflag);
              // isClicked();
            }
          }}
        >
          <Text style={Style.save}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Edit;
