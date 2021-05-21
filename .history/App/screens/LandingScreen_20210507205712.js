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
    borderColor: Colors.text,
    borderWidth: 2,
    width: "100%",
    height: "100%",
  },
  header: {
    flex: 1,
    backgroundColor: Colors.paleRed,
    color: Colors.white,
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
    flex: 6,
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
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar />
      <Text style={Style.header}>TrackIt</Text>
      <View style={Style.card}>
        <MainCard />
      </View>
      <Text style={Style.list}>
        <ListAdapter />
      </Text>
    </SafeAreaView>
  );
};

export default LandingScreen;
