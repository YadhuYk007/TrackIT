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
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar barStyle="light-content" backgroundColor="lightDarkBlue" />
    </SafeAreaView>
  );
};

export default LandingScreen;
