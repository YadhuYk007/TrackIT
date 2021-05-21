import React, { useEffect, useState } from "react";
import { SectionList, View, TouchableOpacity } from "react-native";
import * as SQLite from "expo-sqlite";
import { getData } from "../data/databasehandler";

const List = () => {
  const db = SQLite.openDatabase("trackitdb.db");
  const dateArr = [];

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
            setclickedItem(item);
            return modalizeRefDetials.current?.open();
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
