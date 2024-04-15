import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const ColorPalette = () => {
  return (
    <ImageBackground
      style={styles.colorPaletteIcon}
      resizeMode="cover"
      source={require("../assets/colorpalette.png")}
    />
  );
};

const styles = StyleSheet.create({
  colorPaletteIcon: {
    width: 863,
    height: 612,
  },
});

export default ColorPalette;
