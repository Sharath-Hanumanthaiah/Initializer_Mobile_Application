import React from "react";
import { StyleSheet } from "react-native";

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
    5, // Fetch the next 10 feed items
    (error) => {
      console.log(error);
    }
  );
}

function ItemList(props) {
  const { onItemPress, userId } = props;
  const renderProductItem = ({ item }) => (
    <>
      <ItemListItem
        style={styles.item}
        index={item.node.id}
        item={item.node}
        onItemPress={onItemPress}
        userId={userId}
        // onProductChange={onItemChange}
        // onAddWishList={onAddWishList}
      />
      <Divider style={styles.divider} />
    </>
  );
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
        data={props.items.getItemDetails.edges}
        renderItem={renderProductItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => _loadMore(props)}
        ListFooterComponent={renderFooter}
      />
    </Layout>
  );
}

module.exports = createPaginationContainer(
  ItemList,
  {
    items: graphql`
      fragment ItemList_items on Query {
        getItemDetails(
          first: $count
          after: $after
          itemType: $itemType
          typeId: $typeId
          userId: $userId
        ) @connection(key: "ItemList_getItemDetails") {
          edges {
            cursor
            node {
              id
              ...ItemListItem_item
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.item && props.item.getItemDetails;
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
        after: props.address.getAddress.pageInfo.endCursor,
        itemType: fragmentVariables.itemType,
        typeId: fragmentVariables.typeId,
        userId: fragmentVariables.userId,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ItemListQuery(
        $count: Int!
        $after: String
        $itemType: String!
        $typeId: String!
        $userId: String!
      ) {
        ...ItemList_items
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 3,
  },
  image: {
    margin: 10,
    padding: 30,
    width: 120,
    height: 120,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  detailsContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    marginLeft: 16,
    marginTop: 2,
    overflow: "hidden",
  },
  amountContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 2,
  },
  amountButton: {
    borderRadius: 16,
  },
  actualPrice: {
    textAlign: "center",
    marginLeft: 1,
    textDecorationLine: "line-through",
  },
  discountPrice: {
    textAlign: "center",
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 18,
  },
  discount: {
    color: "#00cc00",
    fontWeight: "bold",
    marginLeft: 12,
    marginTop: 2,
  },
  removeButton: {
    position: "absolute",
    right: 0,
  },
  iconButton: {
    paddingHorizontal: 0,
  },
  availablityContainer: {
    flexDirection: "row",
    height: "auto",
    // width: 'auto',
    // alignSelf: 'flex-start',
    // justifyContent:'flex-start',
    // alignContent: 'flex-start',
    // flexWrap: 'wrap',
    flexShrink: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
