import React, { useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";

const Style = StyleSheet.create({
  FloatingButton: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    backgroundColor: "#0B66D3",
    borderColor: "#000000",
    borderRadius: 200 / 2,
  },
});

const LandingScreen = () => {
  const refRBSheet = useRef();
  return (
    <View style={Style.FloatingButton}>
      <Button
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <YourOwnComponent />
      </RBSheet>
      <TouchableOpacity>
        <Ionicons name="add-outline" size={45} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
