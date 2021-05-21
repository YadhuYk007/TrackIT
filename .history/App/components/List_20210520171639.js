import React, { useEffect, useState, useRef } from "react";
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

const List = ({
  trigger,
  Clicked,
  setAmount,
  setDesc,
  setId,
  setType,
  setDate,
}) => {
  const db = SQLite.openDatabase("trackitdb.db");

  const [listData, setlistData] = useState(null);

  const modalizeListDetails = useRef(null);

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
      // eslint-disable-next-line no-else-return
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
              setAmount(item.amount);
              setDesc(item.description);
              setId(item.id);
              setType(item.type);
              setDate(item.date);
              Clicked();
              // modalizeListDetails.current?.open();
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
                {"\u20B9"}
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
      {/* <Modalize ref={modalizeListDetails} withHandle={false}>
        <Details
          id={Id}
          desc={Desc}
          amt={Amount}
          date={itmDate}
          type={Type}
          closeSheet={() => {
            return modalizeListDetails.current?.close();
          }}
        />
      </Modalize> */}
    </View>
  );
};
export default List;
