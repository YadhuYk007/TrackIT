import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.paleRed,
    width: 56,
    height: 56,
    justifyContent: "center",
  },
});

export default function FabButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.actionFn}>
      <Entypo name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
}
