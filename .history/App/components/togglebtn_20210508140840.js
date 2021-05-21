import React from "react";
import { View } from "react-native";
import FlipToggle from "react-native-flip-toggle-button";

const Toggle = () => {
  return (
    <View>
      <FlipToggle
        value={state.isActive}
        buttonWidth={100}
        buttonHeight={50}
        buttonRadius={50}
        sliderWidth={20}
        sliderHeight={10}
        sliderRadius={50}
        onLabel="Income"
        offLabel="Expense"
        labelStyle={{ color: "black" }}
        onToggle={(newState) =>
          console.log(`toggle is ${state.isActive ? `on` : `off`}`)
        }
        onToggleLongPress={() => console.log("toggle long pressed!")}
      />
    </View>
  );
};

export default Toggle;
