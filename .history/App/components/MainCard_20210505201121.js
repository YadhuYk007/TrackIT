import React from "react";
import { View, Stylesheet, Text } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const MainCard = () => {
  return (
    <View tyle={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"}>
      <Text>Flex Box</Text>
    </View>
  );
};

export default MainCard;
