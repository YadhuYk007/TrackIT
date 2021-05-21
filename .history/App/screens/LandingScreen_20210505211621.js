import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";

const Style = StyleSheet.create({
  header: {
    margin: 10,
    alignItems: "center",
    backgroundColor: Colors.lightBlue,
  },
  title: {
    fontSize: 20,
    margin: 20,
  },
  fab: {
    alignItems: "center",
    paddingBottom: 10,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>
      <View>
        <MainCard />
      </View>
      <View style={Style.fab}>
        <Fab />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
