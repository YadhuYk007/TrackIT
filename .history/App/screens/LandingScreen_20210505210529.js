import React from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet, View } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    margin: 10,
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
    fontSize: 20,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={Style.header}>TrackIt</Text>
      </View>

      {/* <MainCard /> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
