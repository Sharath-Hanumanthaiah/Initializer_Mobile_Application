import React from "react";
import { StyleSheet, ToastAndroid } from "react-native";
import { Layout, List, Divider } from "@ui-kitten/components";
import ItemListItem from "../Items/ItemListItem";

import { createPaginationContainer, graphql } from "react-relay";
import { PaginationLoader } from "../Extras/Loaders";
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
  const { navigation, userId } = props;
  const onItemPress = (event) => {
    navigation.navigate("Details", {
      typeId: event.typeId,
    });
  };
  const renderProductItem = ({ item }) => {
    return (
      <>
        <ItemListItem
          style={styles.item}
          index={item.node.id}
          item={item.node}
          onItemPress={onItemPress}
          userId={userId}
        />
        <Divider style={styles.divider} />
      </>
    );
  };
  const renderFooter = () => {
    if (props.relay.hasMore()) {
      return <PaginationLoader />;
    } else {
      return <></>;
    }
  };
  return (
    <Layout style={styles.container} level="2">
      <List
        data={props.wishlist.getUserWishList.edges}
        renderItem={renderProductItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => _loadMore(props)}
        ListFooterComponent={renderFooter}
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
          @connection(key: "Wishlist_getUserWishList", filters: []) {
          edges {
            cursor
            node {
              id
              ...ItemListItem_item
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
      return {
        count: fragmentVariables.count,
        after: props.wishlist.getUserWishList.pageInfo.endCursor,
        userId: fragmentVariables.userId,
        cursor
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
