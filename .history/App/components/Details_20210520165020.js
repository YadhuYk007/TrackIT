import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modalize,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
// import * as SQLite from "expo-sqlite";
import Color from "../constants/Colors";
import Edit from "./Add";

const Style = StyleSheet.create({
  header: {
    alignSelf: "center",
    marginTop: 16,
    color: Color.lightBlack,
    fontSize: 18,
  },
  close: {
    alignSelf: "flex-end",
    right: 16,
    top: 16,
    position: "absolute",
  },
  IncAmount: {
    alignSelf: "center",
    marginVertical: 38,
    color: Color.green,
    fontSize: 32,
    fontWeight: "bold",
  },
  ExpAmount: {
    color: Color.red,
    marginVertical: 38,
    alignSelf: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  description: {
    alignSelf: "center",
    color: Color.lightBlack,
    fontSize: 18,
  },
  date: {
    alignSelf: "center",
    fontSize: 14,
    color: Color.lightBlack,
    marginVertical: 10,
  },
  edit: {
    color: Color.yellow,
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 16,
  },
  delete: {
    color: Color.lightBlack,
    fontSize: 14,
    alignSelf: "center",
    marginVertical: 16,
  },
});

const Details = (props) => {
  // const db = SQLite.openDatabase("trackitdb.db");
  console.log(JSON.stringify(props));
  // const modalizeRef = useRef(null);

  // const deleteEntry = () => {
  //   deleteData({ db }, props.id);
  // };

  return (
    <View>
      <Text style={Style.header}>{props.type}</Text>
      <SafeAreaView style={Style.close}>
        <TouchableOpacity onPress={() => props.close()}>
          <AntDesign name="close" size={24} color="gray" />
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={props.type === "income" ? Style.IncAmount : Style.ExpAmount}>
        {"\u20B9"}
        {props.amt}
      </Text>

      <Text style={Style.description}>{props.desc}</Text>
      <Text style={Style.date}>{props.date}</Text>
      <TouchableOpacity>
        <Text style={Style.edit}>Edit</Text>
      </TouchableOpacity>

      <Text style={Style.delete}>Delete</Text>
      {/* <Modalize
        ref={modalizeRef}
        withHandle={false}
        disableScrollIfPossible
        onBackButtonPress={() => {}}
        openAnimationConfig={{
          timing: { duration: 280 },
          spring: { speed: 50, bounciness: 0 },
        }}
      >
        <Edit isClicked={false} />
      </Modalize> */}
    </View>
  );
};

export default Details;