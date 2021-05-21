import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Style = StyleSheet.create({
  FloatingButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
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
      <TouchableOpacity>
        <Entypo name="add-to-list" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
