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
    alignItems: "center",
    backgroundColor: Colors.paleRed,
  },
  title: {
    fontSize: 20,
    margin: 20,
    color: Colors.white,
  },
  card: {
    flex: 3,
  },
  list: {
    flex: 3,
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
          <Entypo name="plus" size={35} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LandingScreen;
