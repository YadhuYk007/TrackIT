import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
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
    marginVertical: 16,
  },
});

const Details = (props) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const edit = () => {
    edit({ db }, props.id, props.desc, props.date);
  };

  const deleteEntry = () => {
    deleteData({ db }, props.id);
  };

  return (
    <View>
      <Text style={Style.header}>{props.type}</Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => props.closeSheet()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={props.type === "income" ? Style.IncAmount : Style.ExpAmount}>
        {"\u20B9"}
        {props.amt}
      </Text>

      <Text style={Style.description}>{props.desc}</Text>
      <Text style={Style.date}>{props.date}</Text>
    </View>
  );
};

export default Details;
