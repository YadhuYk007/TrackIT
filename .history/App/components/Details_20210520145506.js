import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as SQLite from "expo-sqlite";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Color.lightBlack,
    fontSize: 20,
  },
  close: {
    alignSelf: "flex-end",
    right: 16,
    top: 16,
    position: "absolute",
  },
  IncAmount: {
    alignSelf: "center",
    marginVertical: 20,
    color: Color.green,
  },
  ExpAmount: {
    color: Color.red,
    marginVertical: 20,
    alignSelf: "center",
  },
});

const Details = (props) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const edit = () => {
    edit({ db }, props.id, props.desc, props.date);
  };

  const deleteEntry = () => {
    deleteData({ db }, props.id);
  };

  return (
    <View>
      <Text style={Style.header}>{props.type}</Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => props.closeSheet()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={
        if(props.type=="Expense"){Style.ExpAmount}else{Style.IncAmount}
        }>
        {"\u20B9"}
        {props.amt}
      </Text>
    </View>
  );
};

export default Details;