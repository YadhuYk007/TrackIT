import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ee6e73",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

export default function FabButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.actionFn}>
      <Entypo name="plus" size={35} color="white" />
    </TouchableOpacity>
  );
}
