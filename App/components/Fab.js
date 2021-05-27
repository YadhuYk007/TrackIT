import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Color from "../constants/Colors";

const Fab = ({ onOpen }) => {
  return (
    <TouchableOpacity style={Style.fab} onPress={() => onOpen()}>
      <Entypo name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  fab: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: Color.yellow,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
  },
});
export default Fab;
