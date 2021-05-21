import React from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    margin: 20,
    alignItems: "center",
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.lightDarkBlue}
      />
      <Text>TrackIt</Text>
      {/* <MainCard /> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
