import React, { useEffect, useState } from "react";
import {
  SectionList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import _ from "lodash";
import * as SQLite from "expo-sqlite";
import dayjs from "dayjs";
import colors from "../constants/Colors";
import { getData } from "../data/databasehandler";

const List = ({
  invoker,
  clicked,
  setAmount,
  setDesc,
  setId,
  setType,
  setDate,
}) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const [listData, setListData] = useState(null);

  const loadDetails = () => {
    const dateArr = [];

    getData({ db }).then((_array) => {
      _array.forEach((element) => {
        dateArr.push({ title: element.date, data: element });
      });
      const groupedData = _(dateArr)
        .groupBy("title")
        .map((details, title) => {
          const data = details.map((detail) => detail.data);
          return {
            title,
            data,
          };
        })
        .value();
      setListData(groupedData);
    });
  };

  const checkToday = (date) => {
    const today = dayjs().format("MMMM D, YYYY");
    if (date === today) {
      return "Today";
    } else {
      return date;
    }
  };

  useEffect(() => {
    loadDetails();
  }, [invoker]);

  return (
    <View>
      <SectionList
        style={{ marginTop: 16, marginBottom: 16 }}
        sections={listData}
        ListFooterComponent={<View style={{ height: 52 }} />}
        ListEmptyComponent={() => {
          return (
            <View style={Style.emptyList}>
              <Text style={{ color: colors.lightBlack }}>
                Please add entries to start tracking...
              </Text>
            </View>
          );
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginVertical: 4 }}
            onPress={() => {
              setAmount(item.amount);
              setDesc(item.description);
              setId(item.id);
              setType(item.type);
              setDate(item.date);
              clicked();
            }}
          >
            <View style={Style.sectionListItem}>
              <Text style={Style.description}>{item.description}</Text>
              <Text
                style={[item.type === "Income" ? Style.income : Style.expense]}
              >
                {`$${item.amount}`}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={Style.sectionHeader}>{checkToday(section.title)}</Text>
        )}
        keyExtractor={(item, index) => index + item}
      />
    </View>
  );
};

const Style = StyleSheet.create({
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
  description: {
    alignSelf: "center",
    marginHorizontal: 16,
    color: colors.lightBlack,
    fontSize: 16,
  },
  income: {
    alignSelf: "center",
    marginHorizontal: 16,
    color: colors.green,
    fontSize: 16,
  },
  expense: {
    alignSelf: "center",
    marginHorizontal: 16,
    color: colors.red,
    fontSize: 16,
  },
});

export default List;
