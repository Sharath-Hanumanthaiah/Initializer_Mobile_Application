import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@ui-kitten/components";
import { TinyStar } from "../Extras/Icons";

export default function RatingViewer(props) {
  const { rating } = props;
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <Text category="s2" style={styles.ratingText}>
        {rating}
      </Text>
      <TinyStar />
    </View>
  );
}

const styles = StyleSheet.create({
  ratingText: {
    marginHorizontal: 2,
    color: "white",
  },
  iconContainer: {
    color: "white",
    marginHorizontal: 2,
  },
});
