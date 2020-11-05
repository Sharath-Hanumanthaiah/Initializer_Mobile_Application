import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import {
  List,
  ListItem,
  Text,
  Icon,
} from "@ui-kitten/components";
import { AppColor } from "../Extras/Colors";
import {createPaginationContainer, graphql} from 'react-relay';


import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function _loadMore(props) {
  console.log("starting loading more", props.relay.hasMore(), props.relay.isLoading());
  if (!props.relay.hasMore() || props.relay.isLoading()) {
    return;
  }
  console.log("loading more");
  props.relay.loadMore(
    5,  // Fetch the next 10 feed items
    error => {
      console.log(error);
    },
  );
}

export default function OrderList(props) {
  const {
    style,
    product,
    index,
    onProductChange,
    onItemClick,
    onAddWishList,
    ...listItemProps
  } = props;
  // const [availabilityData, setAvailabilityData] = useState(product.availablity);
  const zoomIconRef = React.useRef();
  // availabilityData =
  //   product.availablity === undefined ? [{}] : product.availablity;
  // const [availabilityIndex, setAvailabilityIndex] = useState(0);
  // const buttons = availabilityData.map((e) => {
  //   return `${e.value} ${e.unit}`;
  // });
  const renderProductItem = (product) => {
    const productDetails = product.item.node;
    return (
      <>
        <ListItem
          {...listItemProps}
          style={[styles.container, style]}
          key={productDetails.previousApiId}
          onPress={() => {onItemClick(productDetails.previousApiId)}}
        >
          <View style={styles.detailsContainer}>
            <View style={{ width: "90%" }}>
              <Text
                category="h6"
                style={{ fontWeight: "bold" }}
                numberOfLines={2}
              >
                {productDetails.orderDetails}
              </Text>
              <View style={{ marginLeft: 10, marginVertical: 5 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text category="s1" appearance="hint">
                    {"Total Price : "}
                  </Text>
                  <Text style={styles.discountPrice} category="h6">
                    {`₹ ` + productDetails.totalAmount}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="camera-timer"
                    size={14}
                    color="tomato"
                    style={{ marginVertical: 4, marginRight: 10 }}
                  />
                  <Text category="s1">{`Delivered By : `+ new Date(productDetails.deliveredBy).toDateString()}</Text>
                </View>
              </View>
            </View>
          </View>
          <Icon
            style={styles.iconStyle}
            fill={AppColor.Vibrant}
            ref={zoomIconRef}
            animation="shake"
            name="arrow-ios-forward-outline"
          />
        </ListItem>
      </>
    );
  };
  const WishListIconActive = (props) => (
    <MaterialCommunityIcons name="heart" size={23} color="tomato" />
  );
  const WishListIconInactive = (style) => (
    <MaterialCommunityIcons name="chevron-right" size={30} color="tomato" />
  );
  const addToWishList = (props) => {
    // onAddWishList(product, index);
  };
  const updateIndex = (selectedIndex) => {
    setAvailabilityIndex(selectedIndex);
  };
  const onItemPress = (e) => {
    zoomIconRef.current.startAnimation();
    onItemClick(e);
  };
  return <List data={props.orders.getUserOrderSet.edges} renderItem={renderProductItem} onEndReachedThreshold={0.5}
  onEndReached={() => _loadMore(props)} />;
}

module.exports = createPaginationContainer(
  OrderList,
  {
    orders: graphql`
      fragment OrderList_orders on Query {
        getUserOrderSet(first: $count, after: $after, userId: $userId)
          @connection(key: "OrderList_getUserOrderSet") {
          edges {
            node {
              id
              previousApiId
              deliveredBy
              orderDetails
              totalAmount
            }
          }
        }
      }
    `,
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.orders && props.orders.getUserOrderSet;
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
        after: props.orders.getUserOrderSet.pageInfo.endCursor,
        userId: fragmentVariables.userId,
        cursor,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        // userID: fragmentVariables.userID,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query OrderListQuery($count: Int!, $after: String, $userId: ID!) {
        ...OrderList_orders
      }
    `,
  }
);

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 0,
    paddingVertical: 5,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 144,
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
    // textAlign: 'center',
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
    height: "100%",
  },
  iconStyle: {
    position: "absolute",
    right: 0,
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    width: 32,
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
