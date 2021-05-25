import React, { useRef, useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, StatusBar } from "react-native";
import { Modalize } from "react-native-modalize";
import List from "../components/List";
import Add from "../components/Add";
import MainCard from "../components/MainCard";
import Colors from "../constants/Colors";
import Fab from "../components/Fab";
import Edit from "../components/Edit";
import Details from "../components/Details";

const Style = StyleSheet.create({
  maincontainer: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
  header: {
    flex: 0.8,
    backgroundColor: Colors.yellow,
    color: Colors.white,
    fontSize: 25,
    alignItems: "center",
  },
  title: {
    marginTop: 15,
    fontSize: 25,
    color: Colors.white,
  },
  card: {
    flex: 2,
  },
  list: {
    flex: 6,
  },
  fab: {
    alignItems: "center",
  },
});

const LandingScreen = () => {
  const [saveClicked, setSaveClicked] = useState(false);
  const [trigger, settrigger] = useState(0);
  const [desc, setDesc] = useState(null);
  const [id, setId] = useState(null);
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState(null);
  const [itmDate, setitmDate] = useState(null);
  const modalizeRef = useRef(null);
  const detailsModalizeRef = useRef(null);
  const DetailsRef = useRef(null);
  return (
    <SafeAreaView style={Style.maincontainer}>
      <StatusBar backgroundColor={Colors.yellow} />
      <View style={Style.header}>
        <Text style={Style.title}>TrackIt</Text>
      </View>

      <View style={Style.card}>
        <MainCard statevar={trigger} />
      </View>

      {/* Loading Section List */}
      <View style={Style.list}>
        <List
          invoker={trigger}
          Clicked={() => DetailsRef.current?.open()}
          setAmount={(param) => setAmount(param)}
          setDate={(param) => setitmDate(param)}
          setId={(param) => setId(param)}
          setDesc={(param) => setDesc(param)}
          setType={(param) => setType(param)}
        />
      </View>

      {/* Fab Component */}
      <View style={Style.fab}>
        <Fab onOpen={() => modalizeRef.current?.open()} />
      </View>

      {/* BottomSheet for Adding Item */}
      <Modalize ref={modalizeRef} withHandle={false}>
        <Add isClicked={() => setSaveClicked(true)} />
      </Modalize>
      {saveClicked ? modalizeRef.current?.close() : null}
      {saveClicked ? setSaveClicked(false) : null}
      {saveClicked ? settrigger(trigger + 1) : null}

      {/* BottomSheet for displaying Details */}
      <Modalize ref={DetailsRef} withHandle={false}>
        <Details
          id={id}
          desc={desc}
          amt={amount}
          date={itmDate}
          type={type}
          close={() => {
            return DetailsRef.current?.close();
          }}
          onEdit={() => {
            DetailsRef.current?.close();
            detailsModalizeRef.current?.open();
          }}
          onDelete={() => {
            settrigger(trigger + 1);
          }}
        />
      </Modalize>

      {/* BottomSheet for Edit Item */}
      <Modalize ref={detailsModalizeRef} withHandle={false}>
        <Edit
          id={id}
          type={type}
          date={itmDate}
          desc={desc}
          amt={amount}
          // eslint-disable-next-line no-unneeded-ternary
          toggle={type === "Income" ? true : false}
          close={() => {
            settrigger(trigger + 1);
            return detailsModalizeRef.current?.close();
          }}
        />
      </Modalize>
    </SafeAreaView>
  );
};

export default LandingScreen;
