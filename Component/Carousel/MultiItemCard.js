import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Dimensions } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import OffersView from "../Extras/OffersView";
import ImageOverlay from "../Extras/ImageOverlay";

export default function MultiItemCard(props) {
  const { onItemPress, itemType } = props;
  const renderItemHeader = (info) => (
    <>
      <ImageOverlay
        keyValue={"MulticardImage" + info.index}
        style={styles.itemHeader}
        source={info.image}
        type={"ItemCardLoader"}
      />
      <OffersView offer={info.offer} />
    </>
  );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {props.item.map((item, index) => {
        return (
          <Card
            key={index}
            style={styles.productItem}
            header={() =>
              renderItemHeader({
                image: item.imageLink
                  ? { uri: item.imageLink }
                  : require("../../assets/product-default.png"),
                offer: item.offer,
                index: index,
              })
            }
            onPress={() =>
              onItemPress({ itemType: itemType, typeId: item.id })
            }
          >
            <Text category="s1" style={styles.itemFooter} numberOfLines={2}>
              {item.name}
            </Text>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  postsList: {
    borderRadius: 10,
    overflow: "hidden",
  },
  postItem: {
    width: 130,
    height: 130,
    borderRadius: 4,
    margin: 1,
    overflow: "hidden",
  },
  itemHeader: {
    height: 90,
    //   width: (Dimensions.get('window').width - 32) / 3
  },
  itemFooter: {
    // width: (Dimensions.get('window').width) / 4,
    height: 40,
    margin: -15,
    overflow: "hidden",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "capitalize",
  },
  productItem: {
    width: (Dimensions.get("window").width - 30) / 3,
    margin: 0.5,
  },
  postItem: {
    width: 144,
    height: 144,
    borderRadius: 4,
    marginHorizontal: 8,
    overflow: "hidden",
  },
});
