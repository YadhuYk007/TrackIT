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
// const reducer = (state, action) => {
//   switch (action.update) {
//     case "updateList":
//       return { ...state, listData: action.data };
//     default:
//       return state;
//   }
// };

const List = ({ trigger }) => {
  const db = SQLite.openDatabase("trackitdb.db");

  // const [state, dispatch] = useReducer(reducer, { listData: null });
  const [listData, setlistData] = useState(null);
  const modalizeListDetails = useRef(null);

  // const { setItems } = useContext(ItemContext);

  const loadDetails = () => {
    const dateArr = [];

    const details = [];

    getData({ db }).then((_array) => {
      _array.forEach((element) => {
        details.push(element);
        dateArr.push({ title: element.date, data: details });
      });
    });
    // console.log(JSON.stringify(listData));
    // const groupedData = _(dateArr).groupBy("title").map((details,title)=> {
    //   const data = details.map((details)=>details.data){
    //     return{title,data};
    //   }
    // }).value();
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
    console.log(console.log(groupedData));
    setlistData(groupedData);
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
              // setItems(item);
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
            getData();
            return modalizeListDetails.current?.close();
          }}
        />
      </Modalize> */}
    </View>
  );
};
export default List;
