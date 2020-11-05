import React from "react";
import { StyleSheet, View } from "react-native";
import { ImageBackground } from "react-native";
import { Card } from "@ui-kitten/components";
import {  Text } from "@ui-kitten/components";
import ItemsHorizontalList from "./ItemsHorizontalList";

export default function ItemCard(props) {

  const { onItemPress } = props;

  const renderItemHeader = (image) => (
    <ImageBackground style={styles.itemHeader} source={image} />
  );
  const renderPostItem = ({ item }) => {
    return (
      <Card
        style={styles.productItem}
        header={() => renderItemHeader({ uri: item.imageLink })}
        onPress={() => onItemPress(item.id)}
      >
        <View style={{ flexDirection: "column", margin: -10 }}>
          <Text category="s1">{item.name}</Text>
          <Text appearance="hint" category="c1" style={{ fontStyle: "italic" }}>
            {item.description}
          </Text>
        </View>
      </Card>
    );
  };
  return (
    <ItemsHorizontalList
      contentContainerStyle={styles.postsList}
      hint="Style"
      data={props.item}
      // data={data}
      renderItem={renderPostItem}
      // onEndReachedThreshold={0.5}
      // onEndReached={() => _loadMore(props)}
    />
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
  },
  productItem: {
    flex: 1,
    width: 160,
    height: 160,
  },
});
