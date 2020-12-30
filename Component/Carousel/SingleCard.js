import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import ImageOverlay from "../Extras/ImageOverlay";

import { AppColor } from "../Extras/Colors";
import { OfferIcon } from "../Extras/Icons";

export default function SingleCard(props) {
  const { onItemPress, width, itemType } = props;
  return (
    <Card
      key={props.item.id}
      style={{ ...styles.item, width: width }}
      onPress={() => onItemPress({itemType: itemType, typeId: props.item.previousApiId})}
    >
      <ImageOverlay
        style={styles.itemImage}
        keyValue={"image"+props.item.id}
        source={
          props.item.imageLink
            ? { uri: props.item.imageLink }
            : require("../../assets/product-default.png")
        }
      >
        <View style={styles.itemFooter}>
          <Text style={styles.itemTitle} category="h2" status="control">
            {props.item.name}
          </Text>
          {props.item.offer ? (
            <View style={(styles.itemDescription, { flexDirection: "row" })}>
              <OfferIcon />
              <Text
                style={{
                  marginLeft: 5,
                  color: AppColor.White,
                  fontWeight: "bold",
                }}
                category="s1"
                status="control"
              >
                {`Offer upto ${props.item.offer} %`}
              </Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ImageOverlay>
    </Card>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  item: {
    marginVertical: 8,
    height: 220,
    //   width: '33%'
  },
  itemImage: {
    ...StyleSheet.absoluteFillObject,
    height: 220,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  itemTitle: {
    zIndex: 1,
  },
  itemDescription: {
    zIndex: 1,
    marginVertical: 5,
    marginLeft: 15,
  },
  itemFooter: {
    position: "absolute",
    flexDirection: "column",
    left: 12,
    bottom: 18,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
});
