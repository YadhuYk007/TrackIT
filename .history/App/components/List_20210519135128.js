import React, { useEffect, useState, useRef } from "react";
import { SectionList, View, TouchableOpacity, Text } from "react-native";
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

const List = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  const dateArr = [];
  const modalizeListDetails = useRef(null);

  useEffect(() => {
    getData({ db }).then((_array) => {
      _array.forEach((element) => {
        console.log(element.date);
        dateArr.push({ title: element.date, data: element });
        console.log("dateArr>>", dateArr);
      });
    });
  }, []);
  return (
    <SectionList
      style={{ marginTop: 16, marginBottom: 16 }}
      sections={dateArr}
      ListFooterComponent={<View style={{ height: 52 }} />}
      // ListEmptyComponent={() => {
      //   return (
      //     <View style={styles.emptyList}>
      //       <Image
      //         style={{ height: 80, width: 80 }}
      //         source={require("../../assets/images/empty_icon.png")}
      //       />
      //       <Text style={{ color: colors.lightBlack }}>
      //         Ouhh..nothing to Track.
      //       </Text>
      //       <Text style={{ color: "gray" }}>Go..add something.</Text>
      //     </View>
      //   );
      // }}
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
              {item.Description}
            </Text>
            <Text
              style={[
                item.Income > 0
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
              {item.Income > 0 ? `$${item.Income}` : `$${item.Expense}`}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      // renderSectionHeader={({ section }) => (
      //   <Text style={styles.sectionHeader}>
      //     {format(Date.parse(section.title), dateFormat)}
      //   </Text>
      // )}
      keyExtractor={(item, index) => index + item}
    />
  );
};
export default List;
