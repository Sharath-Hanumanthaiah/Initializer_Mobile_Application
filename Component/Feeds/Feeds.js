import React from "react";

import { StyleSheet, View } from "react-native";
import { Card, List, Text, Divider } from "@ui-kitten/components";
import { createPaginationContainer, graphql } from "react-relay";

import RenderCard from "../Carousel/RenderCard";
import { PaginationLoader } from "../Extras/Loaders";

function _loadMore(props) {
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  props.relay.loadMore(
    4, // Fetch the next 5 feed items
    (error) => {
      console.log(error);
    }
  );
}

export default function Feeds(props) {
  const onItemPress = (event) => {
    if (event.itemType === "ItemDetails") {
      props.navigation.navigate("ItemList", {
        screen: "Details",
        params: { typeId: event.typeId },
      });
    } else {
      props.navigation.navigate("ItemList", {
        screen: "ItemList",
        params: { itemType: event.itemType, typeId: event.typeId },
      });
    }
  };
  const renderItem = ({ item }) => {
    return <RenderCard item={item.node} onItemPress={onItemPress} />;
  };
  const renderFooter = () => {
    if (props.relay.hasMore()) {
      return <PaginationLoader />;
    } else {
      return <></>;
    }
  };
  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={props.feed.getHomePage.edges}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      onEndReached={() => _loadMore(props)}
      ListFooterComponent={renderFooter}
    />
  );
}

module.exports = createPaginationContainer(
  Feeds,
  {
    feed: graphql`
      fragment Feeds_feed on Query {
        getHomePage(first: $count, after: $after)
          @connection(key: "Feed_getHomePage") {
          edges {
            node {
              id
              itemType
              name
              previousApiId
              typeId
              widget
              ...RenderCard_item
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.feed && props.feed.getHomePage;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
        categoryId: 1,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count: count,
        after: props.feed.getHomePage.pageInfo.endCursor,
        // catagoryId: null,
        cursor,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query FeedsListQuery($count: Int!, $after: String) {
        ...Feeds_feed
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
