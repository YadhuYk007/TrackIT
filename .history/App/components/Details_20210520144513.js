import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacityBase,
} from "react-native";
import * as SQLite from "expo-sqlite";
import Color from "../constants/Colors";

const Style = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Color.lightBlack,
    fontSize: 20,
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
      <SafeAreaView style={styles.closeButton}>
        <TouchableOpacity onPress={() => close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Details;
