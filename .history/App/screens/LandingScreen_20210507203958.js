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
import ListAdapter from "../components/ListAdapter";

const Style = StyleSheet.create({
  maincontainer: {
    flexDirection: "column",
  },
  header: {
    flex: 2,
    backgroundColor: Colors.paleRed,
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: Colors.white,
  },
  card: {
    flex: 3,
    backgroundColor: Colors.skyBlue,
  },
  list: {
    flex: 5,
    backgroundColor: Colors.darkBlue,
  },

  TouchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text style={Style.header}>this is header</Text>
      {/* <Text style={Style.card}>This is Card</Text>
      <Text style={Style.list}>This is List</Text> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
