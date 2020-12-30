import React from "react";
import ContentLoader, { Rect } from "react-content-loader/native";
import { View, ActivityIndicator, Dimensions } from "react-native";
import { Spinner } from "@ui-kitten/components";
import { AppColor } from "../Extras/Colors";

export const CardLoader = (props) => {
  const { type } = props;
  switch (type) {
    case "ItemCardLoader":
      return (
        <ContentLoader
          speed={1}
          width={400}
          height={90}
          // viewBox="0 0 400 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#dad8d8"
          //   style={{margin: -28}}
          // {...props}
        >
          <Rect x="0" y="0" rx="2" ry="2" width="410" height="580" />
        </ContentLoader>
      );

    default:
      return (
        <ContentLoader
          speed={0.6}
          width={400}
          height={230}
          // viewBox="0 0 400 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#dad8d8"
          style={{ margin: -28 }}
          // {...props}
        >
          <Rect x="0" y="0" rx="2" ry="2" width="410" height="580" />
        </ContentLoader>
      );
  }
};

export const HomePageLoader = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spinner status="warning" size="giant" />
  </View>
);
export const MutationPageLoader = (props) => (
  <ActivityIndicator
    size="large"
    color={AppColor.Vibrant}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    }}
  />
);

export const PaginationLoader = (props) => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 4,
    }}
  >
    <ActivityIndicator size="small" color={AppColor.Vibrant} />
  </View>
);
