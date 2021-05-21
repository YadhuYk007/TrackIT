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
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.paleRed,
    width: 56,
    height: 56,
    position: "absolute",
    bottom: 1,
    left: 80,
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
      <View>
        <ListAdapter />
      </View>
      <TouchableOpacity style={Style.fab}>
        <Entypo name="plus" size={35} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandingScreen;
