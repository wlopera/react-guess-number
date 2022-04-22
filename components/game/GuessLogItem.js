import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Número del Oponente: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: deviceWidth < 380 ? 6 : 12,
    marginVertical: deviceWidth < 380 ? 4 : 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: Colors.primaryBlack,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  itemText: {
    fontFamily: "open-sans",
  },
});
