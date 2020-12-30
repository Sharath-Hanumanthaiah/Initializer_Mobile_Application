import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { ImageBackground } from "react-native";
import { Card } from "@ui-kitten/components";
import { Text } from "@ui-kitten/components";
import ItemsHorizontalList from "./ItemsHorizontalList";
import { ItemCardLoader } from "../Extras/Loaders";
import ImageOverlay from "../Extras/ImageOverlay";

export default function ItemCard(props) {
  const { onItemPress, itemType } = props;
  // let loading = false;
  const [loading, setLoading] = useState(true);

  const renderItemHeader = (info) => (
    <ImageOverlay
      keyValue={"ItemCardImage" + info.index}
      style={styles.itemHeader}
      source={info.image}
      type={"ItemCardLoader"}
    />
  );
  const renderPostItem = ({ item }) => {
    return (
      <Card
        style={styles.productItem}
        header={() =>
          renderItemHeader({
            image: item.imageLink
              ? { uri: item.imageLink }
              : require("../../assets/product-default.png"),
            index: item.id,
          })
        }
        onPress={() =>
          onItemPress({ itemType: itemType, typeId: item.previousApiId })
        }
      >
        <View style={{ flexDirection: "column", margin: -10 }}>
          <Text
            category="s1"
            style={{ fontWeight: "bold", alignSelf: "center" }}
            numberOfLines={2}
          >
            {item.name}
          </Text>
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
