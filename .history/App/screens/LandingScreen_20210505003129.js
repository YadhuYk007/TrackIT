import React from "react";
import { StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Style = StyleSheet.create({
  FloatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ee6e73",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
});

const LandingScreen = () => {
  return (
    <View>
      <Entypo name="add-to-list" size={24} color="black" />
    </View>
  );
};

export default LandingScreen;
