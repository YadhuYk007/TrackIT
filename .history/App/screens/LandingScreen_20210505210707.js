import React from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet, View } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    margin: 10,
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
  },
  title: {
    fontSize: 20,
    margin: 20,
    fontStyle: "italic",
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      {/* <MainCard /> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
