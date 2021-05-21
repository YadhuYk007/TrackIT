import React from "react";
import { moduleName, View } from "react-native";
import FlipToggle from "react-native-flip-toggle-button";

const Toggle = () => {
  return (
    <View>
      <FlipToggle
        value={this.state.isActive}
        buttonWidth={100}
        buttonHeight={50}
        buttonRadius={50}
        sliderWidth={20}
        sliderHeight={10}
        sliderRadius={50}
        onLabel={"On"}
        offLabel={"Off"}
        labelStyle={{ color: "black" }}
        onToggle={(newState) =>
          console.log(`toggle is ${this.state.isActive ? `on` : `off`}`)
        }
        onToggleLongPress={() => console.log("toggle long pressed!")}
      />
    </View>
  );
};

export default Toggle;
