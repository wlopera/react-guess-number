import { StyleSheet, Text, Dimensions } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 18 : 24,
    // fontWeight: "bold",
    color: Colors.primaryWhite,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
