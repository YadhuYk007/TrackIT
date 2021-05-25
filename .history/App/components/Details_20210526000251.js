import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import Toast from "react-native-simple-toast";
import Color from "../constants/Colors";
import { deleteData } from "../data/databasehandler";

const Details = ({ id, desc, amt, date, type, close, onEdit, onDelete }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const executeDelete = () => {
    Toast.show("Deleted");
    onDelete();
    await deleteData({ db }, id);
    close();
  };

  const deleteItem = () => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
      { text: "Yes", onPress: () => executeDelete() },
    ]);
  };

  return (
    <View>
      <Text style={Style.header}>{type}</Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
      <Text
        style={type === "Income" ? Style.incomeAmount : Style.expenseAmount}
      >
        {`$ ${amt}`}
      </Text>

      <Text style={Style.description}>{desc}</Text>
      <Text style={Style.date}>{date}</Text>
      <TouchableOpacity onPress={onEdit}>
        <Text style={Style.edit}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem()}>
        <Text style={Style.delete}>Delete</Text>
      </TouchableOpacity>
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
  incomeAmount: {
    alignSelf: "center",
    marginVertical: 38,
    color: Color.green,
    fontSize: 32,
    fontWeight: "bold",
  },
  expenseAmount: {
    color: Color.red,
    marginVertical: 38,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    alignSelf: "center",
    color: Color.lightBlack,
    fontSize: 18,
  },
  date: {
    alignSelf: "center",
    fontSize: 14,
    color: Color.lightBlack,
    marginVertical: 10,
  },
  edit: {
    color: Color.yellow,
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 16,
  },
  delete: {
    color: Color.lightBlack,
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 16,
  },
});
export default Details;
