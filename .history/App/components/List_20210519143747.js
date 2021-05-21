import React, { useEffect, useReducer, useRef } from "react";
import {
  SectionList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";
import colors from "../constants/Colors";
import { getData } from "../data/databasehandler";

const styles = StyleSheet.create({
  parent: {
    height: "100%",
    flex: 1,
  },
  listParent: {
    backgroundColor: colors.lightGray,
    marginTop: 16,
    flex: 1,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: colors.border,
    marginVertical: 10,
  },
  mainView: {
    flexDirection: "row",
    height: 140,
    borderWidth: 2,
    borderColor: colors.border,
    marginHorizontal: 16,
    marginTop: 24,
    borderRadius: 8,
    justifyContent: "space-evenly",
  },
  balanceView: {
    alignItems: "center",
    justifyContent: "center",
  },
  incomeView: {
    alignItems: "center",
    justifyContent: "center",
  },
  fabParent: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
  emptyList: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: 120,
  },
  sectionListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    marginHorizontal: 16,
    height: 52,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 8,
  },
  sectionHeader: {
    color: colors.lightBlack,
    alignSelf: "center",
    marginVertical: 16,
  },
});
const reducer = (state, action) => {
  switch (action.update) {
    case "updateList":
      return { ...state, listData: action.data };
    default:
  }
};

const List = ({ trigger }) => {
  const db = SQLite.openDatabase("trackitdb.db");
  const [state, dispatch] = useReducer(reducer, { listData: null });
  //const modalizeListDetails = useRef(null);

  useEffect(() => {
    const dateArr = [];
    getData({ db }).then((_array) => {
      _array.forEach((element) => {
        dateArr.push({ title: element.date, data: element });
      });
      dispatch({ update: "updateList", data: dateArr });
    });
  }, [trigger]);
  console.log("dateArr>>", state.listData);

  return (
    <SectionList
      style={{ marginTop: 16, marginBottom: 16 }}
      sections={state.listData}
      ListFooterComponent={<View style={{ height: 52 }} />}
      ListEmptyComponent={() => {
        return (
          <View style={styles.emptyList}>
            <Text style={{ color: colors.lightBlack }}>
              Please add Entries to start tracking...
            </Text>
          </View>
        );
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ marginVertical: 4 }}
          onPress={() => {
            // setclickedItem(item);
            // return modalizeListDetails.current?.open();
            alert("clicked");
          }}
        >
          <View style={styles.sectionListItem}>
            <Text
              style={{
                alignSelf: "center",
                marginHorizontal: 16,
                color: colors.lightBlack,
                fontSize: 16,
              }}
            >
              {item.description}
            </Text>
            <Text
              style={[
                item.type === "income"
                  ? {
                      alignSelf: "center",
                      marginHorizontal: 16,
                      color: colors.green,
                      fontSize: 16,
                    }
                  : {
                      alignSelf: "center",
                      marginHorizontal: 16,
                      color: colors.red,
                      fontSize: 16,
                    },
              ]}
            >
              {item.amount}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => index + item}
    />
  );
};
export default List;
