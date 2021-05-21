import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";

const Style = StyleSheet.create({
  header: {},
});

const LandingScreen = () => {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.lightDarkBlue}
      />
      <Text>TrackIt</Text>
      {/* <MainCard /> */}
    </SafeAreaView>
  );
};

export default LandingScreen;
