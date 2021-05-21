import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";

const Style = StyleSheet.create({
    mainview:{
        flex:1,
        flexDirection: "row",
    }
    description:{
        flex: 1,
        height:20
    },
    anount:{
        flex:1,
        height:20
    }
});

const ListAdapter = () => {
  <SafeAreaView>
    <TouchableOpacity>
      <Text>Item1</Text>
      <Text>Amount</Text>
    </TouchableOpacity>
  </SafeAreaView>;
};

export default ListAdapter;
