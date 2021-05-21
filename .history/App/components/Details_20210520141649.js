import React from "react";
import { StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

const Style = StyleSheet.create({});

const Details = (props) => {
  const db = SQLite.openDatabase("trackitdb.db");
  // const { item } = useContext(itemContext);
  // console.log(item);
  return null;
};

export default Details;
