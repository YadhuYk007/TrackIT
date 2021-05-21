import React from "react";
import { View, Stylesheet } from "react-native";
import Colors from "../constants/Colors";

const styles = Stylesheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const MainCard = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 1, backgroundColor: Colors.blue }} />
      <View style={{ flex: 2, backgroundColor: Colors.paleRed }} />
      <View style={{ flex: 3, backgroundColor: Colors.lightBlue }} />
    </View>
  );
};

export default MainCard;
