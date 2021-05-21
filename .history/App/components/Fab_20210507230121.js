import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Color from "../constants/Colors";

const styles = StyleSheet.create({
  fab: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: Color.paleRed,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
  },
});

const Fab = () => {
  return (
    <TouchableOpacity style={styles.fab}>
      <Entypo name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
};
