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
import Fab from "../components/Fab";

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
    fontSize: 25,
    alignItems: "center",
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: Colors.white,
  },
  card: {
    flex: 2,
  },
  list: {
    flex: 6,
  },
});

const LandingScreen = () => {
  return (
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      <View style={Style.card}>
        <MainCard />
      </View>
      <Text style={Style.list}>
        <ListAdapter />
      </Text>
      <View style={Style.fab}>
        <Fab />
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
