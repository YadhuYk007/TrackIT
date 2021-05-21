import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Color from "../constants/Colors";

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Color.paleRed,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    right: "50%",
    left: "50%",
  },
});

export default function FabButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.actionFn}>
      <Entypo name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
}
