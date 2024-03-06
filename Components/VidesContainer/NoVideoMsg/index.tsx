import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NoVideosMessage = () => (
  <View style={styles.noVideosContainer}>
    <Text style={styles.noVideosText}>No videos available</Text>
  </View>
);

const styles = StyleSheet.create({
  noVideosContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noVideosText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
  },
});

export default NoVideosMessage;
