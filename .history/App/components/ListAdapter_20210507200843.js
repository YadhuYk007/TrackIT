import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";

const Style = StyleSheet.create({
  mainview: {
    flex: 1,
    flexDirection: "row",
  },
  description: {
    flex: 1,
    height: 20,
  },
  amount: {
    flex: 1,
    height: 20,
  },
});

const ListAdapter = () => {
    return(
        <SafeAreaView>
    <TouchableOpacity style={Style.mainview}>
      <Text style={Style.description}>Item1</Text>
      <Text style={Style.amount}>Amount</Text>
    </TouchableOpacity>
  </SafeAreaView>;
    );
  
};

export default ListAdapter;
