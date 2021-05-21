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
});

const MainCard = () => {
  return (
    <View style={{ flex: 2, backgroundColor: Colors.paleRed }}>
      <Text>Flex Box</Text>
    </View>
  );
};

export default MainCard;
