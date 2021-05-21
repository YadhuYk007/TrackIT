import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

const Style = StyleSheet.create({
  FloatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    backgroundColor: "#0B66D3",
    borderColor: "#000000",
    borderRadius: 200 / 2,
  },
});

const LandingScreen = () => {
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={Style.FloatingButton}>
      <StatusBar />
    </SafeAreaView>
  );
};

export default LandingScreen;
