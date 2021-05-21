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
          alert(newState);
        }
      />
    </View>
  );
};

export default Toggle;
