import React from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet, View } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    margin: 20,
    alignItems: "center",
    fontSize: 25,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text>TrackIt</Text>
      </View>

      {/* <MainCard /> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
