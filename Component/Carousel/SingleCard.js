import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "@ui-kitten/components";
import ImageOverlay from "../Extras/ImageOverlay";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function SingleCard(props) {
  const {onItemPress, width} = props;
  return (
    <Card
      key={props.item.id}
      style={{ ...styles.item, width: width }} 
      onPress={() => onItemPress(index)}
    >
      <ImageOverlay style={styles.itemImage} source={{uri:props.item.imageLink}}>
        <View style={styles.itemFooter}>
          <Text style={styles.itemTitle} category="h2" status="control">
            {props.item.name}
          </Text>
          <View style={(styles.itemDescription, { flexDirection: "row" })}>
            <MaterialCommunityIcons
              name="brightness-percent"
              size={20}
              color="#f6673c"
              style={{ marginLeft: 5 }}
            />
            <Text
              style={{ marginLeft: 5, color: "#f6673c" }}
              category="s1"
              status="control"
            >
              {props.item.description}
            </Text>
          </View>
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
