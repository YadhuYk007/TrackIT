import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const MainCard = () => {
  return (
    <View style={Style.container}>
      <Text style={Style.child}>Flex Box</Text>
      <Text style={Style.child}>Flex Box</Text>
    </View>
  );
};

export default MainCard;
