import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

import { Card, List, Text } from "@ui-kitten/components";
import OffersView from "../Extras/OffersView";
import { createPaginationContainer, graphql } from "react-relay";

function _loadMore(props) {
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  props.relay.loadMore(
    5,  // Fetch the next 10 feed items
    error => {
      console.log(error);
    },
  );
}

function ItemSubCategory(props) {
  const {onItemPress} = props;
  const renderItemHeader = (info) => (
    <>
      <ImageBackground style={styles.itemHeader} source={info.image} />
      <OffersView offer={info.offer} />
    </>
  );

  const renderProductItem = ({ item }) => (
    <Card
      style={styles.productItem}
      key={item.node.previousApiId}
      header={() =>
        renderItemHeader({
          image: item.node.imageLink
            ? { uri: item.node.imageLink }
            : require("../../assets/product-default.png"),
          offer: item.node.offer,
        })
      }
        onPress={() => onItemPress({ itemType: "ItemSubCategory", typeId: item.node.id })}
    >
      <Text
        category="s1"
        style={{ fontWeight: "bold", alignSelf: "center" }}
        numberOfLines={2}
      >
        {item.node.name}
      </Text>
    </Card>
  );
  if (
    props.subCategory.getItemSubCategoryByCategoryId.edges &&
    props.subCategory.getItemSubCategoryByCategoryId.edges.length > 0
  ) {
    return (
      <View style={styles.container}>
        <List
          contentContainerStyle={styles.productList}
          renderItem={renderProductItem}
          data={props.subCategory.getItemSubCategoryByCategoryId.edges}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => _loadMore(props)}
        />
      </View>
    );
  } else {
    return <></>;
  }
}

module.exports = createPaginationContainer(
  ItemSubCategory,
  {
    subCategory: graphql`
      fragment ItemSubCategory_subCategory on Query {
        getItemSubCategoryByCategoryId(
          first: $count
          after: $after
          categoryId: $categoryId
        ) @connection(key: "ItemSubCategory_getItemSubCategoryByCategoryId") {
          edges {
            cursor
            node {
              id
              name
              offer
              imageLink
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.subCategory && props.subCategory.getItemSubCategoryByCategoryId;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count: count,
        after: props.subCategory.getItemSubCategoryByCategoryId.pageInfo.endCursor,
        categoryId: fragmentVariables.categoryId,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ItemSubCategoryQuery(
        $count: Int!
        $after: String
        $categoryId: ID!
      ) {
        ...ItemSubCategory_subCategory
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
  },
  productList: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  productItem: {
    margin: 8,
    flex: 1,
    width: 160,
    height: 160,
  },
  itemHeader: {
    height: 100,
  },
});
