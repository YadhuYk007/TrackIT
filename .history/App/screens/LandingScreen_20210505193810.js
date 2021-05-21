import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

const Style = StyleSheet.create({
  FloatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    backgroundColor: "#0B66D3",
    borderColor: "#000000",
    borderRadius: 200 / 2,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView style={Style.FloatingButton}>
      <StatusBar />
    </SafeAreaView>
  );
};

export default LandingScreen;
