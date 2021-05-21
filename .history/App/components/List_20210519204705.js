import React, { useEffect, useReducer, useRef, useContext } from "react";
import {
  SectionList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import * as SQLite from "expo-sqlite";
import dayjs from "dayjs";
import colors from "../constants/Colors";
import { getData } from "../data/databasehandler";
import { itemContext } from "../utils/ItemContext";

const styles = StyleSheet.create({
  emptyList: {
    marginVertical: 120,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  sectionListItem: {
    flexDirection: "row",
    height: 48,
    backgroundColor: colors.white,
    marginHorizontal: 16,
    borderColor: colors.grey,
    justifyContent: "space-between",
    borderWidth: StyleSheet.hairlineWidth,
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
      return state;
  }
};

const checkToday = (date) => {
  const today = dayjs().format("MMMM D, YYYY");
  if (date === today) {
    return "Today";
  } else {
    return date;
  }
};

const List = ({ trigger }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const [state, dispatch] = useReducer(reducer, { listData: null });

  const modalizeListDetails = useRef(null);

  const { clickedItem } = useContext(itemContext);

  useEffect(() => {
    const dateArr = [];

    const details = [];

    getData({ db }).then((_array) => {
      _array.forEach((element) => {
        details.push(element);
        dateArr.push({ title: element.date, data: details });
      });

      dispatch({ update: "updateList", data: dateArr });
    });
  }, [trigger]);

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
            setContext(item);
            return modalizeListDetails.current?.open();
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
        <Text style={styles.sectionHeader}>{checkToday(section.title)}</Text>
      )}
      keyExtractor={(item, index) => index + item}
    />
  );
};
export default List;
