import React from "react";
import { StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";
import { itemContext } from "../utils/ItemContext";

const Style = StyleSheet.create({});

export const Details = () => {
  const db = SQLite.openDatabase("trackitdb.db");

  return null;
};
