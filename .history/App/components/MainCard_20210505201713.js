import React from "react";
import { View, Stylesheet, Text } from "react-native";
import Colors from "../constants/Colors";

const MainCard = () => {
  return (
    <View style={{ flex: 2, backgroundColor: Colors.paleRed }}>
      <Text>Flex Box</Text>
    </View>
  );
};

export default MainCard;
