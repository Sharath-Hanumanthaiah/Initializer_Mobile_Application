import React, { useState } from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Layout, List, Text, Divider } from "@ui-kitten/components";
import ItemList from "../ListPage/ItemList";

import { createPaginationContainer, graphql } from "react-relay";

function _loadMore(props) {
  console.log(
    "starting loading more",
    props.relay.hasMore(),
    props.relay.isLoading()
  );
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  console.log("loading more");
  props.relay.loadMore(
    4, // Fetch the next 4 feed items
    (error) => {
      console.log("error ", error);
    }
  );
}

function Wishlist(props) {
  const showToast = (message) => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
    ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
  const onAddWishList = (product, index) => {
    showToast(`Removed from your wishlist`);
  };
  const renderProductItem = ({ item }) => {
    return (
      <>
        <ItemList
          style={styles.item}
          index={item.node.id}
          item={item.node}
          // onProductChange={onItemChange}
          onAddWishList={onAddWishList}
        />
        <Divider style={styles.divider} />
      </>
    );
  };
  return (
    <Layout style={styles.container} level="2">
        <List
          data={props.wishlist.getUserWishList.edges}
          renderItem={renderProductItem}
          onEndReachedThreshold={0.5}
          onEndReached={() => _loadMore(props)}
        />
    </Layout>
  );
}

module.exports = createPaginationContainer(
  Wishlist,
  {
    wishlist: graphql`
      fragment Wishlist_wishlist on Query {
        getUserWishList(first: $count, after: $after, userId: $userId)
          @connection(key: "Wishlist_getUserWishList") {
          edges {
            cursor
            node {
              id
              ...ItemList_item
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.wishlist && props.wishlist.getUserWishList;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      console.log("fragmentVariables", fragmentVariables);
      return {
        count: fragmentVariables.count,
        after: props.wishlist.getUserWishList.pageInfo.endCursor,
        userId: fragmentVariables.userId,
        cursor,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query WishlistQuery($count: Int!, $after: String, $userId: ID!) {
        ...Wishlist_wishlist
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  item: {
    zIndex: 1,
  },
  divider: {
    margin: 3,
  },
});
