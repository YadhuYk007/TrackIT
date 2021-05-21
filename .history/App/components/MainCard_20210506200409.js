import React from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
  },
  child: {
    height: 200,
    borderWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  innerChild: {
    flex: 1,
    flexDirection: "column",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Flex Box</Text>
      <View style={Style.innerChild}>
        <Text style={Style.child}>Flex Box 1</Text>
        <Text style={Style.child}>Flex Box 2</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
