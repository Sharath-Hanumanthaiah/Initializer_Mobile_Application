import React, { useState, useCallback } from "react";
import { StyleSheet, View, RefreshControl } from "react-native";
import { List, ListItem, Text, Icon, Divider } from "@ui-kitten/components";
import { AppColor } from "../Extras/Colors";
import { createPaginationContainer, graphql } from "react-relay";
import { usePaginationFragment, fetchQuery } from "react-relay/hooks";
import RelayEnvironment from "../../GraphQLUtils/RelayEnvironment";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { PaginationLoader } from "../Extras/Loaders";
import { Currency } from "../Extras/Constants";
import GetCurrentOrderStatus from "../Extras/OrderStatus";
import OrderListRefreshQuery from "../Order/__generated__/OrderAppQuery.graphql";
import { SUCCESSIVE_PAGINATION_COUNT } from "../Extras/Constants";

export default function OrderList(props) {
  const {
    style,
    product,
    index,
    onProductChange,
    onItemClick,
    onAddWishList,
    userId,
    ...listItemProps
  } = props;
  const [refreshing, setRefreshing] = useState(false);
  function _loadMore() {
    if (!hasNext || isLoadingNext) {
      return;
    }
    loadNext(SUCCESSIVE_PAGINATION_COUNT);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchQuery(RelayEnvironment, OrderListRefreshQuery, {
      count: data.getUserOrderSet ? data.getUserOrderSet.edges.length : 0,
      after: 0,
      userId,
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

  const renderFooter = () => {
    if (hasNext) {
      return <PaginationLoader />;
    } else {
      return <></>;
    }
  };

  let { data, loadNext, refetch, hasNext, isLoadingNext } =
    usePaginationFragment(
      graphql`
        fragment OrderList_orders on Query
        @refetchable(queryName: "OrderListPaginationQuery") {
          getUserOrderSet(first: $count, after: $after, userId: $userId)
            @connection(key: "OrderList_getUserOrderSet", filters: []) {
            edges {
              node {
                id
                deliveredBy
                orderDetails
                totalAmount
                paymentMode
                status {
                  payment
                  confirmed
                  delivered
                }
              }
            }
          }
        }
      `,
      props.orders
    );
  const zoomIconRef = React.useRef();
  const renderProductItem = (product) => {
    const productDetails = product.item.node;
    const orderStatus = GetCurrentOrderStatus(
      productDetails.status,
      productDetails.paymentMode
    );
    console.log(orderStatus.text);
    return (
      <>
        <ListItem
          {...listItemProps}
          style={[styles.container, style]}
          key={productDetails.previousApiId}
          onPress={() => {
            onItemClick(productDetails.id);
          }}
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
                    {`${Currency} ` + productDetails.totalAmount}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text category="s1" appearance="hint">
                    {"Status : "}
                  </Text>
                  <Text
                    style={{ color: orderStatus.status, ...styles.orderStatus }}
                    category="h6"
                  >
                    {orderStatus.text}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="camera-timer"
                    size={14}
                    color="tomato"
                    style={{ marginVertical: 4, marginRight: 10 }}
                  />
                  <Text category="s1">
                    {`Delivered By : ` +
                      new Date(productDetails.deliveredBy).toDateString()}
                  </Text>
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

  return (
    <List
      data={data.getUserOrderSet.edges}
      renderItem={renderProductItem}
      ItemSeparatorComponent={Divider}
      onEndReachedThreshold={0.5}
      onEndReached={() => _loadMore(props)}
      ListFooterComponent={renderFooter}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
}

// module.exports = usePaginationFragment(
//   graphql`
//       fragment OrderList_orders on Query {
//         getUserOrderSet(first: $count, after: $after, userId: $userId)
//           @connection(key: "OrderList_getUserOrderSet", filters: []) {
//           edges {
//             node {
//               id
//               deliveredBy
//               orderDetails
//               totalAmount
//               paymentMode
//               status {
//                 payment
//                 confirmed
//                 delivered
//               }
//             }
//           }
//         }
//       }
//     `,
//     props.orders
// );

// module.exports = createPaginationContainer(
//   OrderList,
//   {
// orders: graphql`
//   fragment OrderList_orders on Query {
//     getUserOrderSet(first: $count, after: $after, userId: $userId)
//       @connection(key: "OrderList_getUserOrderSet", filters: []) {
//       edges {
//         node {
//           id
//           deliveredBy
//           orderDetails
//           totalAmount
//           paymentMode
//           status {
//             payment
//             confirmed
//             delivered
//           }
//         }
//       }
//     }
//   }
// `,
//   },
//   {
//     direction: "forward",
//     getConnectionFromProps(props) {
//       return props.orders && props.orders.getUserOrderSet;
//     },
//     // This is also the default implementation of `getFragmentVariables` if it isn't provided.
//     getFragmentVariables(prevVars, totalCount) {
//       return {
//         ...prevVars,
//         count: totalCount,
//       };
//     },
//     getVariables(props, { count, cursor }, fragmentVariables) {
//       return {
//         count: count,
//         after: props.orders.getUserOrderSet.pageInfo.endCursor,
//         userId: fragmentVariables.userId,
//         cursor,
//         // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
//         // userID: fragmentVariables.userID,
//       };
//     },
//     query: graphql`
//       # Pagination query to be fetched upon calling 'loadMore'.
//       # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
//       query OrderListQuery($count: Int!, $after: String, $userId: String!) {
//         ...OrderList_orders
//       }
//     `,
//   }
// );

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
  orderStatus: {
    marginRight: 12,
    fontWeight: "bold",
    fontSize: 16,
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
