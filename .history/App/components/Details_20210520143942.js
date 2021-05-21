import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as SQLite from "expo-sqlite";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Color.lightBlack,
    fontSize: 18,
  },
});

const Details = (props) => {
  const db = SQLite.openDatabase("trackitdb.db");
  console.log(props);

  const edit = () => {
    edit({ db }, props.id, props.desc, props.date);
  };

  const deleteEntry = () => {
    deleteData({ db }, props.id);
  };

  return (
    <View>
      <Text style={Style.header}>{props.type}</Text>
    </View>
  );
};

export default Details;
