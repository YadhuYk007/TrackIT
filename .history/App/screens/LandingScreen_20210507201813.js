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
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>
      <View>
        <MainCard />
      </View>
      <View>
        <ListAdapter />
      </View>
      <View style={Style.TouchableOpacityStyle}>
        <TouchableOpacity style={Style.FloatingButtonStyle}>
          <Entypo name="plus" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
