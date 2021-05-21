import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.paleRed,
    paddingTop: 50,
    paddingBottom: 50,
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