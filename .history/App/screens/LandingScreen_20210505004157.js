import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Style = StyleSheet.create({
  FloatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#0B66D3",
    borderColor: "#000000",
    borderRadius: 200 / 2,
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
      <TouchableOpacity onPress={alert("Adding")}>
        <Entypo name="add-to-list" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
