import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const NumberContainer = ({ children }) => {
  const { width, height } = useWindowDimensions();

  let sizeChange = 380 ? 14 : 28;

  if (width > 500) {
    sizeChange = 6;
  }

  return (
    <View
      style={[styles.container, { margin: sizeChange, padding: sizeChange }]}
    >
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

console.log("Dimensiones:", Dimensions.get("window"));

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 14 : 28,
    padding: deviceWidth < 380 ? 14 : 28,
  },

  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "open-sans-bold",
    // fontWeight: "bold",
  },
});
