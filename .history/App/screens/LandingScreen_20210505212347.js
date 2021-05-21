import React from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";

const Style = StyleSheet.create({
  header: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: Colors.paleRed,
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: Colors.white,
  },
  fab: {
    flex: 1,
    alignItems: "center",
    bottom: 10,
  },
  card: {
    flex: 1,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView style={{ flexDirection: "column" }}>
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
