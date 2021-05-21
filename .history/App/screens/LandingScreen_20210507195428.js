import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
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
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.paleRed,
    width: 56,
    height: 56,
    bottom: 5,
    justifyContent: "center",
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
        <TouchableOpacity style={Style.fab}>
          <Entypo name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
