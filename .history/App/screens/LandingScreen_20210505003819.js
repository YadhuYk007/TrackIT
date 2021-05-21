import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Style = StyleSheet.create({
  FloatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ee6e73",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    right: 10,
  },
  FloatingActionButtonImageStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    tintColor: "#FFFFFF",
  },
});

const LandingScreen = () => {
  return (
    <View style={Style.FloatingButton}>
      <TouchableOpacity>
        <Entypo name="add-to-list" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
