import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Style = StyleSheet.create({
  FloatingButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B66D3",
    borderColor: "#000000",
    borderRadius: 100 / 2,
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
