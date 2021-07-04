import React from "react";

import { StyleSheet, RefreshControl } from "react-native";
import { List } from "@ui-kitten/components";
import { graphql } from "react-relay";
import { usePaginationFragment, fetchQuery } from "react-relay/hooks";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

import RenderCard from "../Carousel/RenderCard";
import { PaginationLoader } from "../Extras/Loaders";
import { SUCCESSIVE_PAGINATION_COUNT } from "../Extras/Constants";

import FeedsContainerRefetch from "./__generated__/FeedsContainerAppQuery.graphql";

export default function Feeds(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  function _loadMore() {
    console.log("loadmore", hasNext, isLoadingNext);
    if (!hasNext || isLoadingNext) {
      return;
    }
    loadNext(SUCCESSIVE_PAGINATION_COUNT);
  }

  let {
    data,
    loadNext,
    refetch,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(
    graphql`
      fragment Feeds_feed on Query
      @refetchable(queryName: "FeedgetHomePageRefetchQuery") {
        getHomePage(first: $count, after: $after)
          @connection(key: "Feed_getHomePage") {
          edges {
            node {
              id
              itemType
              name
              typeId
              widget
              ...RenderCard_item
            }
          }
        }
      }
    `,
    props.feed
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchQuery(RelayEnvironment, FeedsContainerRefetch, {
      count: data.getHomePage ? data.getHomePage.edges.length : 0,
      after: 0,
    }).subscribe({
      complete: () => {
        setRefreshing(false);
        refetch({}, { fetchPolicy: "store-only" });
      },
      error: (error) => {
        let e = error;
        console.log(error);
        setRefreshing(false);
      },
    });
  });

  const onItemPress = (event) => {
    console.log("item pressss", event);
    if (event.itemType === "ItemDetails") {
      props.navigation.navigate("Details", {
        typeId: event.typeId
        // screen: "Details",
        // params: { typeId: event.typeId },
      });
    } else {
      props.navigation.navigate("Items", {
        itemType: event.itemType, 
        typeId: event.typeId
        // screen: "ItemList",
        // params: { itemType: event.itemType, typeId: event.typeId },
      });
    }
  };
  const renderItem = ({ item }) => {
    return <RenderCard item={item.node} onItemPress={onItemPress} />;
  };
  const renderFooter = () => {
    if (hasNext) {
      return <PaginationLoader />;
    } else {
      return <></>;
    }
  };
  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data.getHomePage? data.getHomePage.edges: []}
      renderItem={renderItem}
      onEndReachedThreshold={0.5}
      onEndReached={() => _loadMore()}
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

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
