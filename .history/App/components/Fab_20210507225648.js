import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Color from "../constants/Colors";

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    borderRadius: 30,
    backgroundColor: Color.paleRed,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    right: "45%",
    left: "45%",
  },
});

export default function FabButton(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Entypo name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
}
