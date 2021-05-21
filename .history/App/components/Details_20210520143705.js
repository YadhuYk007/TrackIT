import React from "react";
import { StyleSheet, View, Text } from "react-native";
import * as SQLite from "expo-sqlite";

const Style = StyleSheet.create({});

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
      <Text>{props.desc}</Text>
    </View>
  );
};

export default Details;
