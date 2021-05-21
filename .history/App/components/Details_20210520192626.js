import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modalize,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import Color from "../constants/Colors";
import Edit from "./Edit";
import Test from "./Test";
import { deleteData } from "../data/databasehandler";

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
  IncAmount: {
    alignSelf: "center",
    marginVertical: 38,
    color: Color.green,
    fontSize: 32,
    fontWeight: "bold",
  },
  ExpAmount: {
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

const Details = (props) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const modalizeRef = useRef(null);
  const executeDelete = () => {
    deleteData({ db }, props.id);
    props.close();
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
      <Text style={Style.header}>{props.type}</Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => props.close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={props.type === "Income" ? Style.IncAmount : Style.ExpAmount}>
        {"\u20B9"}
        {props.amt}
      </Text>

      <Text style={Style.description}>{props.desc}</Text>
      <Text style={Style.date}>{props.date}</Text>
      <TouchableOpacity
        onPress={() => {
          modalizeRef.current?.open();
        }}
      >
        <Text style={Style.edit}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteItem()}>
        <Text style={Style.delete}>Delete</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} withHandle={false}>
        <Test />
      </Modalize>
    </View>
  );
};

export default Details;
