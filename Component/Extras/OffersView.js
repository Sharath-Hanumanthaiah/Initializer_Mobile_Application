import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "@ui-kitten/components";
import { AppColor } from "../Extras/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function OffersView(props) {
  if (props.offer) {
    return (
      <LinearGradient
        colors={[AppColor.Vibrant, AppColor.Dull]}
        start={[0.1, 0.6]}
        style={styles.offerContainer}
      >
        <Text
          category="s2"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: 2.5,
            color: AppColor.White,
          }}
        >
          {`${props.offer}% off`}
        </Text>
      </LinearGradient>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  offerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 18,
    margin: 2,
    width: 36,
    height: 36,
    position: "absolute",
    top: 0,
    left: 0,
  },
});
