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
    color: Colors.white,
  },
  children: {
    flex: 2,
    flexDirection: "column",
  },
});

const MainCard = () => {
  return (
    <SafeAreaView style={Style.container}>
      <Text style={Style.child}>Flex Box</Text>
      <View style={Style.children}>
        <Text style={Style.child}>Flex Box2</Text>
        <Text style={Style.child}>Flex Box3</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainCard;
