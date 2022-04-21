import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const Title = ({ children, styleTitle }) => {
  return <Text style={[styles.title, styleTitle]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
