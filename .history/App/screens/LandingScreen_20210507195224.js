import React from "react";
import { SafeAreaView, Text, StyleSheet, View, StatusBar } from "react-native";
import { Entypo } from "@expo/vector-icons";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: Colors.paleRed,
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: Colors.white,
  },
  fab: {
    bottom: 3,
    alignItems: "flex-end",
    position: "absolute",
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>
      <View>
        <MainCard />
      </View>
      <View style={Style.fab}>
        <TouchableOpacity style={styles.button} onPress={props.actionFn}>
          <Entypo name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
