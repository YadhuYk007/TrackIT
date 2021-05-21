import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
    paddingTop: StatusBar.currentHeight * 2,
    borderRadius: 25,
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightDarkBlue,
    paddingTop: 90,
    paddingBottom: 90,
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Flex Box</Text>
      <Text style={Style.child}>Flex Box</Text>
    </SafeAreaView>
  );
};

export default MainCard;
