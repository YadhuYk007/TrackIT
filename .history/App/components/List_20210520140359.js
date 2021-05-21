import React, { useEffect, useState, useRef, useContext } from "react";
import {
  SectionList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import _ from "lodash";
import * as SQLite from "expo-sqlite";
import { Modalize } from "react-native-modalize";
import dayjs from "dayjs";
import colors from "../constants/Colors";
import Details from "./Details";
import { getData } from "../data/databasehandler";
import { ItemContext } from "../utils/ItemContext";

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

const List = ({ trigger }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const [listData, setlistData] = useState(null);
  const [Desc, setDesc] = useState(null);
  const [Id, setId] = useState(null);
  const [Amount, setAmount] = useState(null);
  const [Type, setType] = useState(null);
  const [Date, setDate] = useState(null);
  const modalizeListDetails = useRef(null);

  // const { SelectedItem } = useContext(ItemContext);

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
      setlistData(groupedData);
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
  }, [trigger]);

  return (
    <View>
      <SectionList
        style={{ marginTop: 16, marginBottom: 16 }}
        sections={listData}
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
              console.log(JSON.stringify(item));
              setAmount(item.amount);
              setDesc(item.description);
              setId(item.id);
              setType(item.type);

              // return modalizeListDetails.current?.open();
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
      {/* <Modalize
        ref={modalizeListDetails}
        withHandle={false}
        disableScrollIfPossible
        closeAnimationConfig={{
          timing: { duration: 280 },
          spring: { speed: 50, bounciness: 0 },
        }}
      >
        <Details
          close={() => {
            return modalizeListDetails.current?.close();
          }}
        />
      </Modalize> */}
    </View>
  );
};
export default List;
